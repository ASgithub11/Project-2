import { Router, type Request, type Response } from 'express';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try{
  // checks user
  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // checks password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  //secret key for signing token
  const secretKey = process.env.JWT_SECRET_KEY || '';
  if (!secretKey) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  // create token
  const token = jwt.sign({ userId: user.id, username }, secretKey, { expiresIn: '1d' });
  return res.json({ token });
} catch (error) {
    console.error('Error during login', error);
    return res.status(500).json({ message: 'Internal server error' });
}
};

const router = Router();

// post /login - login user
router.post('/login', login);

export default router;