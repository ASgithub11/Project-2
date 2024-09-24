import React, { useState, useEffect, useCallback } from 'react';

interface Photo {
    urls: {
        regular: string;
    };
    alt_description: string;
    user: {
        name: string;
    };
}


const RandomPhoto: React.FC = () => {
    const [photo, setPhoto] = useState<Photo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Your Unsplash API client ID
    const UNSPLASH_CLIENT_ID = import.meta.env.VITE_UNSPLASH_API_KEY;
    // console

    // Function to fetch a random photo
    const fetchRandomPhoto = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_CLIENT_ID}&orientation=landscape&content_filter=high`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPhoto(data);
        } catch (err) {
            if (err instanceof Error) {
                setError('Failed to fetch photo: ' + err.message);
            } else {
                setError('Failed to fetch photo');
            }
        } finally {
            setLoading(false);
        }
    }, [UNSPLASH_CLIENT_ID]);

    // Fetch photo on component mount
    useEffect(() => {
        fetchRandomPhoto();
    }, [fetchRandomPhoto]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {photo && (
                <div>
                    <img src={photo.urls.regular} alt={photo.alt_description || 'Random photo from specified user serch'} />
                    <p>Photographer: {photo.user.name}</p>
                </div>
            )}
            <button onClick={fetchRandomPhoto}>Get Another Photo</button>
        </div>
    );
};

export default RandomPhoto;