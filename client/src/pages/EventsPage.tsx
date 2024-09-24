// Code to display the list of events on the EventsPage component
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Event } from '../types/Event';
import './EventsPage.css';
import { useNavigate } from 'react-router-dom';
import { retrieveEvents } from '../api/eventAPI';


const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch events from an API or use static data
    const fetchEvents = async () => {
        const fetchedEvents = await retrieveEvents();
        setEvents(fetchedEvents);
    };
    fetchEvents();
    }, []);

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  return (
    <div className="events-page">
    <h1>Upcoming Events</h1>
    <button onClick={handleCreateEvent}>Create Event</button>
      <div className="events-list">
        {events.map(event => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;