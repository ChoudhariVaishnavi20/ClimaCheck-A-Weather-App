import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6 transition-all duration-500">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">☁️ Weather App</h1>

      {/* Weather Card with Glassmorphism */}
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-96 text-white border border-white border-opacity-30">
        
        <input
          type="text"
          placeholder="Enter city name"
          className="border-none bg-white bg-opacity-30 p-3 w-full rounded-xl text-black placeholder-gray-700 focus:ring-4 focus:ring-blue-300 shadow-inner transition-all"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={fetchWeather}
          className="mt-4 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white px-5 py-3 rounded-xl w-full font-semibold shadow-md hover:shadow-lg"
        >
          🔍 Get Weather
        </button>

        {/* Weather Details */}
        {weather && weather.main ? (
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-semibold">{weather.name} 📍</h2>
            <p className="text-xl">🌡 Temperature: {weather.main.temp}°C</p>
            <p className="text-xl">🌥 Condition: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p className="mt-4 text-gray-200 text-lg">Enter a city to get weather details</p>
        )}
      </div>
    </div>
  );
}