"use client"

import { useState, useTransition } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { ITodo } from "@/lib/models/Todo"

// Type for todo data that can come from either mock data or database
type TodoData = {
  _id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  dueDate?: Date
  createdAt: Date
  updatedAt: Date
  userId: any
  category?: string
  tags: string[]
}
import { addTodoAction, updateTodoAction, deleteTodoAction, toggleTodoCompleteAction } from "@/app/(protected-routes)/dashboard/actions"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface User {
  _id: string
  name: string
  email: string
  clerkId: string
  profilePicture?: string
  subscription: boolean
  createdAt: Date
  updatedAt: Date
}

interface DashboardLayoutProps {
  todos: TodoData[]
  user: User
}

export function DashboardLayout({ todos, user }: DashboardLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("home")
  const [todoList, setTodoList] = useState<TodoData[]>(todos)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleToggleComplete = async (todoId: string) => {
    // Optimistic update
    setTodoList((prev) =>
      prev.map((todo) =>
        todo._id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    )

    startTransition(async () => {
      const result = await toggleTodoCompleteAction(todoId)
      if (!result || result.status !== 200) {
        // Revert optimistic update on error
        setTodoList((prev) =>
          prev.map((todo) =>
            todo._id === todoId ? { ...todo, completed: !todo.completed } : todo
          )
        )
        toast.error("Failed to update todo")
      } else {
        toast.success("Todo updated successfully")
      }
    })
  }

  const handleDeleteTodo = async (todoId: string) => {
    // Store the deleted todo for potential revert
    const deletedTodo = todoList.find(todo => todo._id === todoId)
    
    // Optimistic update
    setTodoList((prev) => prev.filter((todo) => todo._id !== todoId))

    startTransition(async () => {
      const result = await deleteTodoAction(todoId)
      if (!result || result.status !== 200) {
        // Revert optimistic update on error
        if (deletedTodo) {
          setTodoList((prev) => [...prev, deletedTodo])
        }
        toast.error("Failed to delete todo")
      } else {
        toast.success("Todo deleted successfully")
      }
    })
  }

  const handleAddTodo = async (todoData: Partial<ITodo>) => {
    startTransition(async () => {
      const result = await addTodoAction(todoData)
      if (result && result.status === 200 && result.data) {
        // Optimistically add the new todo to the local state
        setTodoList((prev) => [result.data, ...prev])
        toast.success("Todo created successfully")
      } else {
        toast.error("Failed to create todo")
      }
    })
  }

  const handleEditTodo = async (todoId: string, todoData: Partial<ITodo>) => {
    startTransition(async () => {
      const result = await updateTodoAction(todoId, todoData)
      if (result && result.status === 200 && result.data) {
        // Optimistically update the todo in the local state
        setTodoList((prev) =>
          prev.map((todo) =>
            todo._id === todoId ? { ...todo, ...result.data } : todo
          )
        )
        toast.success("Todo updated successfully")
      } else {
        toast.error("Failed to update todo")
      }
    })
  }

  // Filter todos based on active section
  const getFilteredTodos = () => {
    let filtered = todoList

    // Apply section-specific filters
    switch (activeSection) {
      case "home":
        // Show all todos
        break
      case "pending":
        filtered = filtered.filter((todo) => !todo.completed)
        break
      case "completed":
        filtered = filtered.filter((todo) => todo.completed)
        break
      case "priority":
        filtered = filtered.filter((todo) => todo.priority === "high")
        break
      case "recent":
        // Show todos created in the last 7 days
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        filtered = filtered.filter((todo) => new Date(todo.createdAt) >= sevenDaysAgo)
        break
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (todo.description && todo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (todo.category && todo.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
          todo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    return filtered
  }

  const filteredTodos = getFilteredTodos()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} user={user} />
        <DashboardContent
          todos={filteredTodos}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeSection={activeSection}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
          onAddTodo={handleAddTodo}
          onEditTodo={handleEditTodo}
        />
      </div>
    </SidebarProvider>
  )
}
