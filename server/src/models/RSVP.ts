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

// This is the actual RSVP model, which extends the Model class from Sequelize
export class RSVP extends Model<RSVPAttributes, RSVPCreationAttributes> implements RSVPAttributes {
  public id!: number;    // Unique identifier for each RSVP
  public userId!: number;   // userId is a foreign key from the User model
  public eventId!: number;  // eventId is a foreign key from the Event model
  public status!: string;   // RSVP status: 'yes', 'no', or 'maybe'

  public readonly createdAt!: Date; // Automatically generated timestamp for when the RSVP was created
  public readonly updatedAt!: Date; // Automatically generated timestamp for when the RSVP was last updated
}

// This function initializes the RSVP model and sets up schema and table name
export function RSVPFactory(sequelize: Sequelize): typeof RSVP {
    RSVP.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' }, // Foreign key to User
        },
        eventId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'events', key: 'id' }, // Foreign key to Event
        },
        status: {
          type: DataTypes.ENUM('yes', 'no', 'maybe'), // Limited values for RSVP status
          allowNull: false,
        },
      },
      {
        tableName: 'rsvps', // Table name in the database
        sequelize, // Pass the sequelize instance
      }
    );

    return RSVP;
}
