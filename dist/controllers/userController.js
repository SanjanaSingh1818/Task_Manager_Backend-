import { User } from '../models/User';
export async function getUsers(req, res) {
    try {
        const users = await User.find({})
            .select('_id name email role')
            .sort({ name: 1, email: 1 });
        console.log('[users] fetched users:', users.length, 'requested by:', req.user?.email);
        res.json(users);
    }
    catch (err) {
        console.error('[users] failed to fetch users:', err);
        res.status(500).json({ error: err.message });
    }
}
//# sourceMappingURL=userController.js.map