import React, { useEffect, useState } from 'react';

interface WeatherGeneratorProps {
  location: string;
}

const WeatherGenerator: React.FC<WeatherGeneratorProps> = ({ location }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Your Open Weather API key
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location, OPEN_WEATHER_API_KEY]);

  if (loading) {
    return <div>Loading weather...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-info">
      <h3>Weather in {location}</h3>
      <p>Temperature: {weather.main.temp}°F</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherGenerator;