import mongoose, { Schema, Document } from 'mongoose';
import type { IUser } from './User';

export interface IProject extends Document {
  title: string;
  description?: string;
  createdBy: IUser['_id'];
  teamMembers: IUser['_id'][];
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamMembers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export const Project = mongoose.model<IProject>('Project', projectSchema);
