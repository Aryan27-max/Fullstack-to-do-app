"use server";

import { onAuthenticateUser } from "./user";
import { Todo, initDB } from "@/lib/mongoose";
import { ITodo } from "@/lib/models/Todo";
import { serializeTodo, serializeTodos } from "@/lib/serialize";

export async function getAllTodos() {
    const user = await onAuthenticateUser();

    if(200 !== user?.status || !user) {
        return { status: user?.status, data: null };
    }

    try {
        await initDB();
        
        const allTodos = await Todo.find({
            userId: user.user?._id
        }).sort({ createdAt: -1 });

        return { status: 200, data: serializeTodos(allTodos) };
        
    } catch (error) {
        console.log("Error fetching todos", error);
        return { status: 500 };
    }
}

export async function createTodo(todoData: Partial<ITodo>) {
    console.log("createTodo called with:", todoData);
    
    const user = await onAuthenticateUser();
    console.log("User authentication result:", user);

    if(200 !== user?.status || !user) {
        console.log("User authentication failed");
        return { status: user?.status, data: null };
    }

    try {
        await initDB();
        console.log("Database initialized");
        
        const todoToCreate = {
            ...todoData,
            userId: user.user?._id
        };
        console.log("Creating todo with data:", todoToCreate);
        
        const newTodo = await Todo.create(todoToCreate);
        console.log("Todo created successfully:", newTodo);

        return { status: 200, data: serializeTodo(newTodo) };
        
    } catch (error) {
        console.log("Error creating todo", error);
        return { status: 500, error: error instanceof Error ? error.message : "Unknown error" };
    }
}

export async function updateTodo(todoId: string, todoData: Partial<ITodo>) {
    const user = await onAuthenticateUser();

    if(200 !== user?.status || !user) {
        return { status: user?.status, data: null };
    }
    
    try {
        await initDB();
        
        const todo = await Todo.findOne({
            _id: todoId,
            userId: user.user?._id
        });

        if(!todo) {
            return { status: 404, error: "Todo not found" };
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            todoId,
            todoData,
            { new: true }
        );

        return { status: 200, data: serializeTodo(updatedTodo) };
        
    } catch (error) {
        console.log("Error updating todo", error);
        return { status: 500 };
    }
}

export async function deleteTodo(todoId: string) {
    const user = await onAuthenticateUser();

    if(200 !== user?.status || !user) {
        return { status: user?.status, data: null };
    }
    
    try {
        await initDB();
        
        const todo = await Todo.findOne({
            _id: todoId,
            userId: user.user?._id
        });

        if(!todo) {
            return { status: 404, error: "Todo not found" };
        }

        await Todo.findByIdAndDelete(todoId);

        return { status: 200, message: "Todo deleted successfully" };
        
    } catch (error) {
        console.log("Error deleting todo", error);
        return { status: 500 };
    }
}

export async function toggleTodoComplete(todoId: string) {
    const user = await onAuthenticateUser();

    if(200 !== user?.status || !user) {
        return { status: user?.status, data: null };
    }
    
    try {
        await initDB();
        
        const todo = await Todo.findOne({
            _id: todoId,
            userId: user.user?._id
        });

        if(!todo) {
            return { status: 404, error: "Todo not found" };
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            todoId,
            { completed: !todo.completed },
            { new: true }
        );

        return { status: 200, data: serializeTodo(updatedTodo) };
        
    } catch (error) {
        console.log("Error toggling todo completion", error);
        return { status: 500 };
    }
}