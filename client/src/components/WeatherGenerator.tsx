import React, { useState, useEffect } from 'react';
// REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key_here
require('dotenv').config();

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your OpenWeatherMap API key
  const API_KEY = 'UNSPLASH_API_KEY';

  // Function to fetch weather data
  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather data for a default city on component mount
  useEffect(() => {
    fetchWeatherData('New York'); // Default city
  }, []);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <button onClick={() => fetchWeatherData('London')}>Check London Weather</button>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;