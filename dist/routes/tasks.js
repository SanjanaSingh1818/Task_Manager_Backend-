import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { verifyToken, requireAdmin } from '../middleware/auth.js';
const router = express.Router();
router.get('/', verifyToken, getTasks);
router.post('/', verifyToken, requireAdmin, createTask);
router.patch('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, requireAdmin, deleteTask);
export default router;
//# sourceMappingURL=tasks.js.map