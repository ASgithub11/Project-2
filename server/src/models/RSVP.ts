import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

// These are all the attributes in the RSVP model
interface RSVPAttributes {
  id: number;       // Unique identifier for each RSVP
  userId: number;   // User who RSVP'd
  eventId: number;  // Event the RSVP is for
  status: string;   // RSVP status: 'yes', 'no', or 'maybe'
}
