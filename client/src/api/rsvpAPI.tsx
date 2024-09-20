import { RsvpData } from "../interfaces/RsvpData";
import { ApiMessage } from "../interfaces/ApiMessage";

const createRsvp = async (body: RsvpData):Promise<RsvpData> => {
    try {
      const response = await fetch(
        '/api/RSVPS/', {
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
      console.log('Error from RSVP Creation: ', err);
      return Promise.reject('Could not create new RSVP');
    }
  };

  const deleteRsvp = async (id: number): Promise<ApiMessage> => {
    try {
      const response = await fetch(
        `/api/RSVPS/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json();
      if(!response.ok) {
        throw new Error('invalid API response');
      }
      return data;
    } catch (err) {
      console.error('Error in deleting RSVP', err);
      return Promise.reject('Could not delete RSVP');
    }
  };
  
  export { createRsvp, deleteRsvp };