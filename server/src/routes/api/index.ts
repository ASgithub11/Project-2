import { Router } from 'express';
import { userRouter } from './user-route.js';
import { eventRouter } from './event-route.js';
import { rsvpRouter } from './RSVP-route.js';

const router = Router();

router.use('/users', userRouter);
router.use('/events', eventRouter);
router.use('./rsvps', rsvpRouter);

export default router;