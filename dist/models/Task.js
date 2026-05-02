import mongoose, { Schema } from 'mongoose';
const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['todo', 'in_progress', 'completed'], default: 'todo' },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dueDate: { type: Date },
}, { timestamps: true });
export const Task = mongoose.model('Task', taskSchema);
//# sourceMappingURL=Task.js.map