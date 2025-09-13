// Utility functions to serialize Mongoose documents to plain objects

export function serializeTodo(todo: any) {
  return {
    _id: todo._id.toString(),
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
    priority: todo.priority,
    dueDate: todo.dueDate,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
    userId: todo.userId.toString(),
    category: todo.category,
    tags: todo.tags
  };
}

export function serializeUser(user: any) {
  return {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    clerkId: user.clerkId,
    profilePicture: user.profilePicture,
    subscription: user.subscription,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

export function serializeTodos(todos: any[]) {
  return todos.map(serializeTodo);
}