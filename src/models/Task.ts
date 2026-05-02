import mongoose, { Schema, Document } from 'mongoose';
import type { IUser } from './User.js';
import type { IProject } from './Project.js';

export interface ITask extends Document {
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'completed';
  assignedTo?: IUser['_id'];
  projectId: IProject['_id'];
  createdBy: IUser['_id'];
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['todo', 'in_progress', 'completed'], default: 'todo' },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

export const Task = mongoose.model<ITask>('Task', taskSchema);
