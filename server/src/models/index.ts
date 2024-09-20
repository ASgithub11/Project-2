import sequelize from '../config/connection.js';
import { UserFactory } from './User.js';
import { EventFactory } from './Event.js';
import { RSVPFactory } from './RSVP.js';

// Initialize the models
const User = UserFactory(sequelize);
const Event = EventFactory(sequelize);
const RSVP = RSVPFactory(sequelize);

// Define relationships between models
User.hasMany(Event, { foreignKey: 'userId' });
Event.belongsTo(User, { foreignKey: 'userId' });
Event.hasMany(RSVP, { foreignKey: 'eventId', onDelete: 'CASCADE' });
RSVP.belongsTo(Event, { foreignKey: 'eventId' });
User.hasMany(RSVP, { foreignKey: 'userId', onDelete: 'CASCADE' });
RSVP.belongsTo(User, { foreignKey: 'userId' });

// Export the models and sequelize instance
export { User, Event, RSVP, sequelize };
