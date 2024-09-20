import express from 'express';
import type { Request, Response } from 'express';
import { RSVP, User, Event } from '../../models/index.js';

const router = express.Router();
// RSVP to an event
router.post('/', async (_req: Request, res: Response) => {
    const { id, userId, eventId, status } = _req.body;
    if (!id || !userId || !eventId || !status) {
        return res.status(400).json({ message: 'ID, User ID, Event ID, and RSVP status are required'});
    }
    try {
        const rvspExists = await RSVP.findByPk(id);
        const userExists = await User.findByPk(userId);
        const eventExists = await Event.findByPk(eventId);
        if (!rvspExists) {
            return res.status(404).json({ message: 'RSVP not found'})
        }
        if (!userExists) {
            return res.status(404).json({ message: 'User not found'});
        }
        if (!eventExists) {
            return res.status(404).json({ message: 'Event not found'});
        }
        const newRsvp = new RSVP ({ id, userId, eventId, status});
        await newRsvp.save();
        return res.status(201).json(newRsvp);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating RSVP', error });
    }
  });

  // Cancel an RSVP
router.delete('/:id', async (req: Request, res: Response) => {
    const rsvpId = req.params.id;

    try {
        const rsvp = await RSVP.findByPk(rsvpId);
        if (rsvp) {
            return res.json({ message: 'RSVP canceled successfully'});
        } else {
            return res.status(404).json({ message: 'RSVP not found'});
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error canceling RSVP', error});
    }
  });

  export { router as rsvpRouter };
