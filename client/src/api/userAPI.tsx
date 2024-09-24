import { UserData } from "../interfaces/UserData";

// retrieve all users
const retrieveUsers = async () => {
  try {
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if(!response.ok) {
      throw new Error('invalid user API response');
    }
    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }  
};

// retrieve a specific user
const retrieveUser = async (id: number): Promise<UserData> => {
  try {
    const response = await fetch(`/api/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    if(!response.ok) {
      throw new Error('invalid user API response');
    }
    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return Promise.reject('Could not fetch user');
  }
};

// create a new user
const createUser = async (body: UserData): Promise<UserData> => {
  try {
    const response = await fetch(
      '/api/users', {
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
    console.log('Error from User Creation: ', err);
    return Promise.reject('Could not create user');
  }
};

// login a user
const loginUser = async (email: string, password: string): Promise<UserData> => {
    try {
      const response = await fetch(
        '/api/login', {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }
  
      )
      const data = response.json();
      if(!response.ok) {
        throw new Error('invalid API response');
      }
      return data;
    } catch (err) {
      console.log('Error from User Creation: ', err);
      return Promise.reject('Could not create user');
    }
  };
  

export { retrieveUser, retrieveUsers, createUser, loginUser };
