import mongoose, { Schema } from 'mongoose';
const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamMembers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });
export const Project = mongoose.model('Project', projectSchema);
//# sourceMappingURL=Project.js.map