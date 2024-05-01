import mongoose, { Document } from 'mongoose';
import { IProject } from '../types';

interface IProjectDocument extends IProject, Document {}

const projectSchema = new mongoose.Schema<IProjectDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    memberIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    taskIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model<IProjectDocument>('Project', projectSchema);
