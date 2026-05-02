import express from 'express';
import { getProjects, createProject, getProject, deleteProject } from '../controllers/projectController';
import { verifyToken, requireAdmin } from '../middleware/auth';

const router = express.Router();

router.get('/', verifyToken, getProjects);
router.post('/', verifyToken, requireAdmin, createProject);
router.get('/:id', verifyToken, getProject);
router.delete('/:id', verifyToken, requireAdmin, deleteProject);

export default router;
