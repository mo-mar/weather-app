import React, { useState } from "react";
import * as classes from "./App.module.css";
import axios from 'axios';
import WeatherData from './WeatherData';

function App() {

    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState({});
    const [error, setError] = useState('');
    const [tempUnit, setTempUnit] = useState('celsius');
    const apiKey = '5e0d4cf71fa108bfda4fcde6212092ec';

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
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response => {
            setForecast(response.data);
        }).catch(error => {
            setError(error);
        });
    }

    return (
        <div className={classes.App}>
            <h1>Weather App</h1>
            <label htmlFor="unit">
                <p>Show temperatures in</p>
                <select id="unit" onChange={handleDropdownChange}>
                    <option value="celcius">Celcius</option>
                    <option value="celcius">Fahrehnheit</option>
                </select>
            </label>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => handleChange(e)}/>
                <button>BUTTON</button>
            </form>
            {forecast.main ? <WeatherData data={forecast} unit={tempUnit}/> : null}
        </div>
    );
}

export default App;
