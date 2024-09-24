import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Event } from '../types/Event';
import './EventDetailCard.css';
import UnsplashRandomPhoto from '../components/UnsplashRandomPhoto';

interface EventDetailProps {
  events: Event[];
}

const EventDetail: React.FC<EventDetailProps> = ({ events }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(event => event.id === parseInt(id || '0'));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className='event-detail-container'>
      <div className="Event-Detail-Card">
        <div>
          {event.title && <UnsplashRandomPhoto query={event.title} />}
          <h1>{event.title}</h1>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <button onClick={() => navigate(-1)}>Return</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;