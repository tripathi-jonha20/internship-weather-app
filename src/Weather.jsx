import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity]       = useState('London');
  const [input, setInput]     = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) setCity(input.trim());
  };

  return (
    <div className="app-container">
      <div className="bg-animation"></div>
      <form className="weather-card" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Go</button>

        {loading && <p>Loading…</p>}
        {error   && <p style={{ color: 'red' }}>{error}</p>}

        {weather && !error && (
          <div>
            <h2>{weather.name}</h2>
            <p>
              {weather.main.temp}°C • {weather.weather[0].description}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}



