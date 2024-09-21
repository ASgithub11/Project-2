// EventList component that displays a list of events. The user can filter the events by date, category, or location.

import React, { useEffect, useState } from 'react';
import { retrieveEvents } from '../api/eventAPI';
import { EventData } from '../interfaces/EventData';
// import './EventList.css';

const EventList: React.FC = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await retrieveEvents();
            setEvents(fetchedEvents);
        };
        fetchEvents();
    }, []);
    
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const filteredEvents = events.filter((event) => event.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="event-list">
      <h2>Events</h2>
      <input type="text" placeholder="Filter events..." value={filter} onChange={handleFilterChange} />
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            {/* We can add more event details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
