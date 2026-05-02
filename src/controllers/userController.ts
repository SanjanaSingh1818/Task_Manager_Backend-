import { Response } from 'express';
import { User } from '../models/User';
import { AuthRequest } from '../middleware/auth';

export async function getUsers(req: AuthRequest, res: Response) {
  try {
    const users = await User.find({})
      .select('_id name email role')
      .sort({ name: 1, email: 1 });

    console.log('[users] fetched users:', users.length, 'requested by:', req.user?.email);
    res.json(users);
  } catch (err: any) {
    console.error('[users] failed to fetch users:', err);
    res.status(500).json({ error: err.message });
  }
}
