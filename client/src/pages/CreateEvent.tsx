import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';

const CreateEvent: React.FC = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newEvent = { title, date, location, description };

        const response = await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        });

        if (response.ok) {
            alert('Event created successfully!');

            // Redirect to the events page after 2 seconds
            setTimeout(() => {
                navigate('/events');
            }, 2000);
            } else {
                alert('Failed to create event.');
            }
    };

    return (
        <div className='container'>
            <h1>Create a New Event</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Title:
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    required />
                </label>
                <label>
                    Date:
                    <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                    required />
                </label>
                <label>
                    Location:
                    <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required />
                </label>
                <label>
                    Description:
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required />
                </label>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
