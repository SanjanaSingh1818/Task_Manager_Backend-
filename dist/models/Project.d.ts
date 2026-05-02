import mongoose, { Document } from 'mongoose';
import type { IUser } from './User.js';
export interface IProject extends Document {
    title: string;
    description?: string;
    createdBy: IUser['_id'];
    teamMembers: IUser['_id'][];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Project: mongoose.Model<IProject, {}, {}, {}, mongoose.Document<unknown, {}, IProject> & IProject & {
    _id: mongoose.Types.ObjectId;
}, any>;
//# sourceMappingURL=Project.d.ts.map