import React, { useState, useEffect, useCallback } from 'react';

interface WeatherData {
    name: string;
    sys: {
        country: string;
    };
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
    }[];
}

const WeatherInfo: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Your OpenWeatherMap API key
    const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

    // Function to fetch weather data
    const fetchWeatherData = useCallback(async (city: string) => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: WeatherData = await response.json();
            setWeatherData(data);
        } catch (err) {
            if (err instanceof Error) {
                setError('Failed to fetch weather data: ' + err.message);
            } else {
                setError('Failed to fetch weather data');
            }
        } finally {
            setLoading(false);
        }
    }, [OPEN_WEATHER_API_KEY]);

    // Fetch weather data for a default city on component mount
    useEffect(() => {
        fetchWeatherData('New York'); // Default city
    }, [fetchWeatherData]);

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