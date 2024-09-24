import { ApiMessage } from "../interfaces/ApiMessage";
import { EventData } from "../interfaces/EventData";

// retrieve all events
const retrieveEvents = async () => {
    try {
        const response = await fetch('/api/events', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error('invalid event API response')
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return[];
    }
};

// retrieve specific event
const retrieveEvent = async (id: number): Promise<EventData> => {
    try {
        const response = await fetch(`/api/events/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error('invalid event API response');
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return Promise.reject('Could not retrieve event');
    }
};


// create event
const createEvent = async (body: EventData): Promise<EventData> => {
    try {
        const response = await fetch(
            '/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        )
        const data = response.json();
        if(!response.ok) {
            throw new Error('invalid API response');
        }
        return data;
    } catch (err) {
        console.log('Error from Volunteer Creation:', err);
        return Promise.reject('Could not create event');
    }
};

// update event
const updateEvents = async (id: number, body: EventData): Promise<EventData> => {
    try {
        const response = await fetch(
            `/api/events/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        )
        const data = await response.json();
        if(!response.ok) {
            throw new Error('invalid API response');
        }
        return data;
    } catch (err) {
        console.error('Update did not work', err);
        return Promise.reject('Update did not work');
    }
};

// delete event
const deleteEvent = async (id: number): Promise<ApiMessage> => {
    try {
        const response = await fetch(
            `/api/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        const data = await response.json();
        if(!response.ok) {
            throw new Error('invalid API response');
        }
        return data;
    } catch (err) {
        console.error('Error in deleting event', err);
        return Promise.reject('Could not delete event')
    }
};

export { retrieveEvents, retrieveEvent, createEvent, updateEvents, deleteEvent };