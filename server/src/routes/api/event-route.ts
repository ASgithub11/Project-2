import express from 'express';
import type { Request, Response } from 'express';
import { Event } from '../../models/index.js';

const router = express.Router();

// Get all events
router.get('/', async (_req: Request, res: Response) => {
    // TODO: code to get all events
});

// Fetch details of a specific event
router.get('/', async (_req: Request, res: Response) => {
    // TODO: code to get details of specific event
});

// Add a new event
router.post('/', async (_req: Request, res: Response) => {
    // TODO: code to create a new event
});

// Update an event
router.put('/', async (_req: Request, res: Response) => {
    // TODO: code to update an event
});

// Remove an event
router.delete('/', async (_req: Request, res: Response) => {
    // TODO: code to delete an event
});

export { router as eventRouter} ;

