"use server";

import { revalidatePath } from "next/cache";
import { createTodo, updateTodo, deleteTodo, toggleTodoComplete, getAllTodos } from "@/actions/todos";
import { ITodo } from "@/lib/models/Todo";

export async function addTodoAction(todoData: Partial<ITodo>) {
  console.log("addTodoAction called with:", todoData);
  
  const result = await createTodo(todoData);
  console.log("createTodo result:", result);
  
  if (result && result.status === 200) {
    revalidatePath("/dashboard");
  }
  
  return result;
}

export async function updateTodoAction(todoId: string, todoData: Partial<ITodo>) {
  const result = await updateTodo(todoId, todoData);
  
  if (result.status === 200) {
    revalidatePath("/dashboard");
  }
  
  return result;
}

export async function deleteTodoAction(todoId: string) {
  const result = await deleteTodo(todoId);
  
  if (result.status === 200) {
    revalidatePath("/dashboard");
  }
  
  return result;
}

export async function toggleTodoCompleteAction(todoId: string) {
  const result = await toggleTodoComplete(todoId);
  
  if (result.status === 200) {
    revalidatePath("/dashboard");
  }
  
  return result;
}

export async function getTodosAction() {
  return await getAllTodos();
}