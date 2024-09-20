import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = express.Router();

// Get all users
router.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error});
    }
});

// Get a user by ID
router.get('/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error});
    }
});

// Create a new user
router.post('/create', async (req: Request, res: Response) => {
    const { id, username, email, password } = req.body;
    try {
        const newUser = new User({ id, username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error});
    }
});

// Login endpoint
router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ message: 'Login successful', user});
        } else {
            res.status(401).json({ message: 'Invalid credentials'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error});
    }
});

export { router as userRouter };