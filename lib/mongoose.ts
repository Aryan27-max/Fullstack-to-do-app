import connectDB from './mongodb';
import { User, Todo } from './models';

// Initialize database connection
export const initDB = async () => {
  try {
    await connectDB();
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Export models for easy access
export { User, Todo };
export default { User, Todo, initDB };