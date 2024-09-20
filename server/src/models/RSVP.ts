import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

// These are all the attributes in the RSVP model
interface RSVPAttributes {
  id: number;       // Unique identifier for each RSVP
  userId: number;   // User who RSVP'd
  eventId: number;  // Event the RSVP is for
  status: string;   // RSVP status: 'yes', 'no', or 'maybe'
}

// Optional id attribute for creating a new RSVP
interface RSVPCreationAttributes extends Optional<RSVPAttributes, 'id'> {}

export class RSVP extends Model<RSVPAttributes, RSVPCreationAttributes> implements RSVPAttributes {
  public id!: number;
  public userId!: number;
  public eventId!: number;
  public status!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
