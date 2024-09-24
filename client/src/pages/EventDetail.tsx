import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Event } from '../types/Event';
import './EventDetailCard.css';
import '../components/UnsplashRandPhoto';
import logo from '../assets/images/SocialSync-logo.png';

// const image = placeHolderImg;

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
                {/* <img src={`https://source.unsplash.com/1600x900/?${event.title}`} alt={event.title} /> */}
                <img  className='unSplashAPI-img' src={logo} alt={event.title} />
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