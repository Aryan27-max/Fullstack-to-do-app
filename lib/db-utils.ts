import { User, Todo, initDB } from './mongoose';
import { IUser, ITodo } from './models';

// Initialize database connection
export const connectToDatabase = async () => {
  await initDB();
};

// User operations
export const createUser = async (userData: Partial<IUser>) => {
  await connectToDatabase();
  const user = new User(userData);
  return await user.save();
};

export const findUserByClerkId = async (clerkId: string) => {
  await connectToDatabase();
  return await User.findOne({ clerkId });
};

export const updateUser = async (clerkId: string, updateData: Partial<IUser>) => {
  await connectToDatabase();
  return await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
};


// Todo operations
export const createTodo = async (todoData: Partial<ITodo>) => {
  await connectToDatabase();
  const todo = new Todo(todoData);
  return await todo.save();
};

export const findTodosByUserId = async (userId: string) => {
  await connectToDatabase();
  return await Todo.find({ userId }).sort({ createdAt: -1 });
};

export const findTodoById = async (todoId: string) => {
  await connectToDatabase();
  return await Todo.findById(todoId);
};

export const updateTodo = async (todoId: string, updateData: Partial<ITodo>) => {
  await connectToDatabase();
  return await Todo.findByIdAndUpdate(todoId, updateData, { new: true });
};

export const deleteTodo = async (todoId: string) => {
  await connectToDatabase();
  return await Todo.findByIdAndDelete(todoId);
};

export const toggleTodoComplete = async (todoId: string) => {
  await connectToDatabase();
  const todo = await Todo.findById(todoId);
  if (!todo) return null;
  
  todo.completed = !todo.completed;
  return await todo.save();
};

export const findTodosByStatus = async (userId: string, completed: boolean) => {
  await connectToDatabase();
  return await Todo.find({ userId, completed }).sort({ createdAt: -1 });
};

export const findTodosByPriority = async (userId: string, priority: 'low' | 'medium' | 'high') => {
  await connectToDatabase();
  return await Todo.find({ userId, priority }).sort({ createdAt: -1 });
};