import { Response } from 'express';
import { Task } from '../models/Task.js';
import { AuthRequest } from '../middleware/auth.js';

export async function getTasks(req: AuthRequest, res: Response) {
  try {
    let query: any = {};
    if (req.user?.role !== 'admin') {
      query = { assignedTo: req.user?.id };
    }

    const tasks = await Task.find(query)
      .populate('assignedTo', 'name email')
      .populate('projectId', 'title')
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function createTask(req: AuthRequest, res: Response) {
  try {
    const { title, description, projectId, assignedTo, dueDate, status } = req.body;

    if (!title || !projectId) {
      return res.status(400).json({ error: 'Title and projectId required' });
    }

    const task = new Task({
      title,
      description,
      projectId,
      assignedTo,
      dueDate,
      status: status || 'todo',
      createdBy: req.user?.id,
    });

    await task.save();
    await task.populate([
      { path: 'assignedTo', select: 'name email' },
      { path: 'projectId', select: 'title' },
      { path: 'createdBy', select: 'name email' },
    ]);

    res.status(201).json(task);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateTask(req: AuthRequest, res: Response) {
  try {
    const { status, description, assignedTo, dueDate } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status, description, assignedTo, dueDate },
      { new: true }
    )
      .populate('assignedTo', 'name email')
      .populate('projectId', 'title')
      .populate('createdBy', 'name email');

    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.json(task);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteTask(req: AuthRequest, res: Response) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.json({ message: 'Task deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
