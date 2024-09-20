import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

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
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating user', error});
    }
});

// Login endpoint
router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where:{username}});
        if (!user) {return res.status(401).json({ message: 'Invalid credentials'});}
        const validPassword = await user.validatePassword(password);
        if (!validPassword) {return res.status(401).json({ message: 'Invalid credentials'});}
        const secret = process.env.JWT_SECRET_KEY || 'FALLBACK_SECRET';
        const token = Jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });
        return res.json({ message: 'Login successful', token });
        
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in', error});
    }
});

export { router as userRouter };