import { DataTypes, type Sequelize, Model } from 'sequelize';

// Event model attributes
interface EventAttributes {
    id: number;
    title: string;
    date: Date;
    location: string;
}

// Define Event class extending Sequelize Model
export class Event extends Model<EventAttributes> implements EventAttributes {
    public id!: number;
    public title!: string;
    public date!: Date;
    public location!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Factory function to define and initialize the Event model
export function EventFactory(sequelize: Sequelize): typeof Event {
    Event.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'events',
            timestamps: true,
        }
    );
    return Event;
}
