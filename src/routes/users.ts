import express from 'express';
import { getUsers } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getUsers);

export default router;
