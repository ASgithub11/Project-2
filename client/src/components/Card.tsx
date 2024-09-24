import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types/Event';
import './Card.css';

interface CardProps {
  event: Event;
}

const Card: React.FC<CardProps> = ({ event }) => {
  return (
    <div className="card">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> <br/> {event.description}</p>
      <Link to={`/events/${event.id}`}>View Details</Link>
    </div>
  );
};

export default Card;