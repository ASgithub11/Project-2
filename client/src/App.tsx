import React from 'react';
import RandomPhoto from './RandomPhoto';
import WeatherInfo from './WeatherGenerator';

function App() {
  return (
      <><div className="App">
          <h1>Random Photo from Unsplash</h1>
          <RandomPhoto />
      </div>
        <div className="App">
            <h1>My Weather App</h1>
            <WeatherInfo />
        </div></>
  );
}

export default App;