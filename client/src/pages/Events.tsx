import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();   // useNavigate hook to navigate to different pages

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                if (!response.ok) throw new Error('Failed to fetch events');
                const data = await response.json();
                console.log(data);  // Log the data to the console to check if data is received
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  return (
    <div>
      <h1>Upcoming Events</h1>
      <button onClick={handleCreateEvent}>Create Event</button> {/* Button to create a new event*/}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{formatDate(event.date)}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <button>RSVP</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
