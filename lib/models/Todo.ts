import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: mongoose.Types.ObjectId;
  category?: string;
  tags: string[];
}

const TodoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: String,
    required: false,
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Create indexes for better performance
TodoSchema.index({ userId: 1 });
TodoSchema.index({ completed: 1 });
TodoSchema.index({ priority: 1 });
TodoSchema.index({ dueDate: 1 });

export default mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);