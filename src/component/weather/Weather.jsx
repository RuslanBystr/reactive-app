import React, {useState, useEffect} from "react";
import axios from "axios";


const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('Lutsk');

    const apiKey = '1239f2f8c244ddf9454c22a3e8fb1ca3';
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error weather date', error);
            }
        };

        if (city && apiKey) {
            fetchWeatherData();
        }
    }, [city, apiKey]);

    return (
        <div>
        {weatherData.main && (
          <div>
            <h1>{weatherData.name}</h1>
            <p>Temp : {weatherData.main.temp}°C</p>
            <p>Вологість: {weatherData.main.humidity}%</p>
            <p>Стан погоди: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    );
}

export default Weather;