import express from 'express';
import { signup, login, getMe } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js';
const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', verifyToken, getMe);
export default router;
//# sourceMappingURL=auth.js.map