import mongoose, { Document } from 'mongoose';
import { ITask } from '../types';

interface ITaskDocument extends ITask, Document {}

const taskSchema = new mongoose.Schema<ITaskDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['todo', 'in-progress', 'done'],
      default: 'todo',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model<ITaskDocument>('Task', taskSchema);
