import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

// These are all the attributes in the User model 
interface UserAttributes {
  id: number;  // Unique identifier for each user
  username: string; // Username chosen by the user
  email: string;    // User's email address
  password: string; // User's hashed password
}

