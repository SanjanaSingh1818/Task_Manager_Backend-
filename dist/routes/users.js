import express from 'express';
import { getUsers } from '../controllers/userController';
import { verifyToken } from '../middleware/auth';
const router = express.Router();
router.get('/', verifyToken, getUsers);
export default router;
//# sourceMappingURL=users.js.map