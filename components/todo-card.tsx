"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Trash2, Edit, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
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
import { format } from "date-fns";

interface TodoCardProps {
  todo: TodoData;
  onToggleComplete: (todoId: string) => void;
  onDelete: (todoId: string) => void;
  onEdit: (todo: TodoData) => void;
}

export function TodoCard({
  todo,
  onToggleComplete,
  onDelete,
  onEdit,
}: TodoCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "low":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      default:
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <Card
      className={`group hover:shadow-md transition-all duration-200 border-border/40 bg-card/50 backdrop-blur-sm ${
        todo.completed ? "opacity-75" : ""
      } ${isOverdue ? "border-red-500/30" : ""}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => onToggleComplete(todo._id)}
            className="mt-1"
          />
          <div className="space-y-1 min-w-0 flex-1">
            <CardTitle className={`text-base font-semibold ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
              {todo.title}
            </CardTitle>
            {todo.description && (
              <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                {todo.description}
              </CardDescription>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onClick={() => onEdit(todo)}
                className="cursor-pointer"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onDelete(todo._id)}
                className="cursor-pointer text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={`text-xs ${getPriorityColor(todo.priority)}`}
            >
              {todo.priority}
            </Badge>
            {todo.category && (
              <Badge variant="secondary" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {todo.category}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {todo.dueDate && (
              <div className={`flex items-center gap-1 ${isOverdue ? "text-red-500" : ""}`}>
                <Calendar className="h-3 w-3" />
                {format(new Date(todo.dueDate), "MMM dd")}
              </div>
            )}
            <span>{format(new Date(todo.createdAt), "MMM dd")}</span>
          </div>
        </div>
        {todo.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {todo.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {todo.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{todo.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}