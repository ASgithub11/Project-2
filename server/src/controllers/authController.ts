import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/User';

const secretKey = process.env.JWT_SECRET_KEY || '';

// Handles user registration
export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists.' });
        }

        // Hash the password before saving the user
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const newUser = await User.create({ username, email, password: hashedPassword });
        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error registering user', error });
    }
};

// Handles user login and generates a JWT token
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    try {
        // Find the user by email
        const user = await User.findOne({ where: { email } });

        // If the user is not found, return an error
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Compare the entered password with the hashed password
        const passwordIsValid = await bcrypt.compare(password, user.password);

        // If the password is invalid, return an error
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user.id, email }, secretKey, { expiresIn: '1h' });

        return res.json({ token });
        } catch (error) {
        console.error('Error during login', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
