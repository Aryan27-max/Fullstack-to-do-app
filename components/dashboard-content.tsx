"use client"

import { Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { TodoCard } from "@/components/todo-card"
import { AddTodoModal } from "@/components/add-todo-modal"
import { useState } from "react"
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

interface DashboardContentProps {
  todos: TodoData[]
  searchQuery: string
  onSearchChange: (query: string) => void
  activeSection: string
  onToggleComplete: (todoId: string) => void
  onDeleteTodo: (todoId: string) => void
  onAddTodo: (todoData: Partial<ITodo>) => void
  onEditTodo: (todoId: string, todoData: Partial<ITodo>) => void
}

export function DashboardContent({
  todos,
  searchQuery,
  onSearchChange,
  activeSection,
  onToggleComplete,
  onDeleteTodo,
  onAddTodo,
  onEditTodo,
}: DashboardContentProps) {
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false)
  const [editingTodo, setEditingTodo] = useState<TodoData | null>(null)

  const getSectionTitle = () => {
    switch (activeSection) {
      case "home":
        return "All Todos"
      case "pending":
        return "Pending Todos"
      case "completed":
        return "Completed Todos"
      case "priority":
        return "High Priority Todos"
      case "recent":
        return "Recent Todos"
      case "settings":
        return "Settings"
      default:
        return "Todos"
    }
  }

  const getEmptyMessage = () => {
    switch (activeSection) {
      case "pending":
        return "No pending todos found."
      case "completed":
        return "No completed todos found."
      case "priority":
        return "No high priority todos found."
      case "recent":
        return "No recent todos found."
      default:
        return "No todos found. Create your first todo!"
    }
  }

  const handleAddTodo = () => {
    setIsAddTodoModalOpen(true)
  }

  const handleEditTodo = (todo: TodoData) => {
    setEditingTodo(todo)
    setIsAddTodoModalOpen(true)
  }

  const handleSaveTodo = (todoData: Partial<ITodo>) => {
    if (editingTodo) {
      onEditTodo(editingTodo._id, todoData)
      setEditingTodo(null)
    } else {
      onAddTodo(todoData)
    }
    setIsAddTodoModalOpen(false)
  }

  const handleCloseModal = () => {
    setIsAddTodoModalOpen(false)
    setEditingTodo(null)
  }

  // Show add button in all sections except settings
  const showActionButtons = activeSection !== "settings"

  return (
    <SidebarInset className="flex-1">
      <div className="flex flex-col h-full">
        {/* Header with search */}
        <header className="flex items-center gap-4 p-4 border-b border-border/40">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-lg font-semibold">{getSectionTitle()}</h1>
            {activeSection !== "settings" && (
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search todos..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10 bg-background"
                  />
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Action buttons section */}
        {showActionButtons && (
          <div className="flex items-center gap-3 p-4 border-b border-border/40 justify-end">
            <Button onClick={handleAddTodo} className="flex items-center gap-2 cursor-pointer">
              <Plus className="h-4 w-4" />
              Add Todo
            </Button>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          {activeSection === "settings" ? (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <p>Settings panel coming soon...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {todos.map((todo) => (
                  <TodoCard
                    key={todo._id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDeleteTodo}
                    onEdit={handleEditTodo}
                  />
                ))}
              </div>

              {todos.length === 0 && (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <p>{getEmptyMessage()}</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Add/Edit Todo Modal */}
      <AddTodoModal
        isOpen={isAddTodoModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTodo}
        editTodo={editingTodo}
      />
    </SidebarInset>
  )
}
