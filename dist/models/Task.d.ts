import mongoose, { Document } from 'mongoose';
import type { IUser } from './User';
import type { IProject } from './Project';
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
export declare const Task: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask> & ITask & {
    _id: mongoose.Types.ObjectId;
}, any>;
//# sourceMappingURL=Task.d.ts.map