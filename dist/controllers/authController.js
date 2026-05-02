import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
export async function signup(req, res) {
    try {
        const { email, password, name, role } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Email, password, and name required' });
        }
        const existing = await User.findOne({ email });
        if (existing)
            return res.status(400).json({ error: 'Email already in use' });
        const user = new User({ email, password, name, role: role || 'member' });
        await user.save();
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.status(201).json({
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password required' });
        }
        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ error: 'Invalid email or password' });
        const valid = await user.comparePassword(password);
        if (!valid)
            return res.status(401).json({ error: 'Invalid email or password' });
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export async function getMe(req, res) {
    try {
        const user = await User.findById(req.user?.id);
        if (!user)
            return res.status(404).json({ error: 'User not found' });
        res.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
//# sourceMappingURL=authController.js.map