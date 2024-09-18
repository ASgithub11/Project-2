import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../models/index.js';

const router = express.Router();

// Get a user by ID
router.get('/', async (req: Request, res: Response) => {
    // TODO: code to return one user based on ID
});

// Create a new user
router.post('/', async (req: Request, res: Response) => {
    // TODO: code to create a User
});

// 
router.post('/', async (req: Request, res: Response) => {
    // TODO: login endpoint
});

export { router as userRouter };