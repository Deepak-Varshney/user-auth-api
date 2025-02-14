import express from 'express';
import { getUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected route to search for a user
router.get('/search', authMiddleware, getUser);

export default router;
