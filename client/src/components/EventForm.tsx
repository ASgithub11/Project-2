// This is the form for authenticated users to create a new event.

import React, { useState } from 'react';
import { createEvent } from '../api/eventAPI';
import { EventData } from '../interfaces/EventData';
// import './EventForm.css';

const EventForm: React.FC = () => {
    const [event, setEvent] = useState<EventData>({
        id: 0,
        title: '',
        date: new Date(),
        location: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createEvent(event);
            alert('Event created successfully!');
        } catch (error) {
            alert('Failed to create event');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="event-form">
            <h2>Create New Event</h2>
            <label>Event Title:<input type="text" name="title" value={event.title} onChange={handleChange} required /></label>
            <label>Date:<input type="date" name="date" value={event.date.toString().split('T')[0]} onChange={handleChange} required /></label>
            <label>Location:<input type="text" name="location" value={event.location} onChange={handleChange} required /></label>
            
            <button type="submit" className="btn btn-primary">Create Event</button>
        </form>
    );
};

export default EventForm;
