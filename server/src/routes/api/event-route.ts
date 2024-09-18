import express from 'express';
import type { Request, Response } from 'express';
import { Event } from '../../models/index.js';

const router = express.Router();

// Get all events
router.get('/', async (_req: Request, res: Response) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
});

// Fetch details of a specific event
router.get('/:id', async (req: Request, res: Response) => {
    const eventId = req.params.id;
    try {
        const event = await Event.findById(eventId);
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ message: 'Event not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error });
    }
});

// Add a new event
router.post('/', async (req: Request, res: Response) => {
    const { title, date, location } = req.body;
    if(!title || !date || !location) {
        return res.status(400).json({ message: 'Title, date, and location are required'});
    }
    try {
        const newEvent = new Event({ title, date, location });
        await newEvent.save();
        return res.status(201).json(newEvent);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating event', error });
    }
});

// Update an event
router.put('/:id', async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const updates = req.body;
    try {
        const event = await Event.findByIdAndUpdate(eventId, updates, { new: true});
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error});
    }
});

// Remove an event
router.delete('/:id', async (req: Request, res: Response) => {
    // TODO: code to delete an event
    const eventId = req.params.id;
    try {
        const result = await Event.findByIdAndDelete(eventId);
        if(result) {
            res.json({ message: 'Event delted successfully'});
        } else {
            res.status(404).json({ message: 'Event not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
});

export { router as eventRouter } ;

