import React, { useEffect, useState } from 'react';
import './UnsplashRandomPhoto.css';

interface UnsplashRandomPhotoProps {
  query: string;
  className?: string;
}

const UnsplashRandomPhoto: React.FC<UnsplashRandomPhotoProps> = ({ query }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  // Your Unsplash API client ID
  const UNSPLASH_CLIENT_ID = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodedQuery}?q=8&client_id=${UNSPLASH_CLIENT_ID}&orientation=landscape&content_filter=high`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setImageUrl(data.results[0].urls.regular);
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
      }
    };

    fetchImage();
  }, [UNSPLASH_CLIENT_ID, query]);

  if (!imageUrl) {
    return <div>Loading...</div>;
  }

  return <img className="unsplash-random-photo" src={imageUrl} alt={query} />;
};

export default UnsplashRandomPhoto;