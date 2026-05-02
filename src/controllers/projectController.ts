import { Response } from 'express';
import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';
import { AuthRequest } from '../middleware/auth.js';

export async function getProjects(req: AuthRequest, res: Response) {
  try {
    let query: any = {};
    if (req.user?.role !== 'admin') {
      query = { teamMembers: req.user?.id };
    }

    const projects = await Project.find(query)
      .populate('createdBy', 'name email')
      .populate('teamMembers', 'name email')
      .sort({ createdAt: -1 });

    res.json(projects);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function createProject(req: AuthRequest, res: Response) {
  try {
    const { title, description } = req.body;

    if (!title) return res.status(400).json({ error: 'Title required' });

    const project = new Project({
      title,
      description,
      createdBy: req.user?.id,
      teamMembers: [req.user?.id],
    });

    await project.save();
    await project.populate('createdBy', 'name email');

    res.status(201).json(project);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProject(req: AuthRequest, res: Response) {
  try {
    const project = await Project.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('teamMembers', 'name email');

    if (!project) return res.status(404).json({ error: 'Project not found' });

    const tasks = await Task.find({ projectId: project._id })
      .populate('assignedTo', 'name email')
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });

    res.json({ ...project.toObject(), tasks });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteProject(req: AuthRequest, res: Response) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    await Task.deleteMany({ projectId: project._id });
    await Project.findByIdAndDelete(req.params.id);

    res.json({ message: 'Project deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
