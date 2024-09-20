import React, { useState, useEffect } from 'react';
// import .env from '\dotenv';
// REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key_here
require('dotenv').config();


const RandomPhoto = () => {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Unsplash API client ID
    const UNSPLASH_API_KEY = 'UNSPLASH_API_KEY';

    // function to fetch a random photo from Unsplash API
    const fetchRandomPhoto = async () => {
        try {
            setLoading(true);
            // todo: fetch random photo from Unsplash API
            const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}query=`);
        }
        if (!response.ok) {
            throw new Error('Failed to fetch photo: ' + err.message);
        } finally {
            setLoading(false);
        }
    };
};

// fetch photo when component mounts
useEffect(() => {
    fetchRandomPhoto();
}, []);

if (loading) {
    return <p>Loading...</p>;
}
if (error) {
    return <p>Error: {error.message}</p>;
}

return (
    <div>
        {photo && (
            <div>
                <img src={photo.urls.regular} alt={photo.alt_description || 'Random photo'} />
                <p>Photographer: {photo.user.name}</p>
            </div>
        )}
        <button onClick={fetchRandomPhoto}>Get Another Photo</button>
    </div>
);

export default RandomPhoto;