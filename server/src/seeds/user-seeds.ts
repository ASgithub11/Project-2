import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  const hashedPassword = await bcrypt.hash('password', 10); // Hashing the password once before saving it to the database
  await User.bulkCreate([
    { username: 'JollyGuru', email: 'jolly@guru.com', password: hashedPassword },
    { username: 'SunnyScribe', email: 'sunny@scribe.com', password: hashedPassword },
    { username: 'RadiantComet', email: 'radiant@comet.com', password: hashedPassword },
  ], { individualHooks: true });
};
