import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interface for the JWT payload
interface JwtPayload {
  username: string;
}

// Extending the Express Request type to include user property
declare module 'express-serve-static-core' {
    interface Request {
      user?: JwtPayload;
    }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    // Get the Authorization header from the request  
    const authHeader = req.headers.authorization;

    if (authHeader) {
        // Get the token from the Authorization header
        const token = authHeader.split(' ')[1];

        const secretKey = process.env.JWT_SECRET_KEY || '';

        // Verify the JWT token using the secret key
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            
            // Set the user property in the request to the JWT payload
            req.user = user as JwtPayload;
            return next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};
