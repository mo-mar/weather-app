import React, { useState } from "react";
import axios from 'axios';
import WeatherData from './Components/WeatherData';
import WeatherForm from './Components/WeatherForm';
import {myKey as apiKey} from './keys.json';
import './App.css';
import * as classes from './App.module.css';

function App() {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState({});
    const [error, setError] = useState('');
    const [tempUnit, setTempUnit] = useState('celsius');

    const handleChange = (event) => {
        let city = event.target.value;
        setCity(city);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getForecast();
    }

    const handleDropdownChange = () => {
        if (tempUnit === 'celsius') {
            setTempUnit("fahrenheit");
        }
        else {
            setTempUnit('celsius');
        }
    }

    const getForecast = async () => {
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(response => {
            setForecast(response.data);
        }).catch(error => {
            setError(error.response.data.message);
        });
    }

    

    return (
        <div className={classes.App}>
            <h1>Weather App</h1>
            <WeatherForm
                handleSubmit={handleSubmit}
                handleDropdownChange={handleDropdownChange}
                handleChange={handleChange}
            />
            {forecast.main ? <WeatherData data={forecast} unit={tempUnit}/> : null}
            {error ? `Error: ${error}` : null}
        </div>
    );
}

export default App;
