import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

// These are all the attributes in the User model 
interface UserAttributes {
  id: number;  // Unique identifier for each user
  username: string; // Username chosen by the user
  email: string;    // User's email address
  password: string; // User's hashed password
}

// Optional id attribute for creating a new user, because the id is auto-generated
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// This is the actual User model, which extends the Model class from Sequelize
export class User
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes
{
    public id!: number;         // User id is a number
    public username!: string;   // Username is a string
    public email!: string;      // Email is a string
    public password!: string;   // Password is a string
    
    public readonly createdAt!: Date;   // Timestamp when the user was created
    public readonly updatedAt!: Date;   // Timestamp when the user was last updated

    // Method to hash the password before saving to the database
    public async setPassword(password: string) {
        const saltRounds = 10;  // Number of salt rounds for the bcrypt hashing
        this.password = await bcrypt.hash(password, saltRounds);    // Hash the password and store it
    }

    // Method to compare the password entered by the user with the hashed password in the database
    public async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);  // Compare the passwords and return the result
    }
}

// UserFactory function that creates the User model and sets up schema, table name, and hooks for hashing the password before saving
export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            // Define id as the primary key that auto-incrementing 
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            // Define username with validation rules
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true, // Username cannot be an empty string
                }
            },
            // Define email with validation rules
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,   // Email must be unique to ensure no duplicate emails
                validate: {
                    isEmail: true,  // Validate that the email is in the correct format
                }
            },
            // Define password field with validation rules
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true, // Password cannot be an empty string
                }
            },
        },
        {
            tableName: 'users',   // Define the table name in the database
            sequelize,          // Pass the sequelize instance
            hooks: {
                // Hook to hash the password before creating or updating the user
                beforeCreate: async (user: User) => {
                    await user.setPassword(user.password);
                },
                beforeUpdate: async (user: User) => {
                    await user.setPassword(user.password);
                },
            },
        }
    );

    return User;
}
