import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  clerkId: string;
  profilePicture?: string;
  subscription: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  subscription: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Index is already created by unique: true constraint

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);