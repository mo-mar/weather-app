import React, { useState } from "react";
import * as classes from "./App.module.css";

function App() {
    const [city, setCity] = useState("");
    const [cityKey, setCityKey] = useState(null);
    const [forecast, setForecast] = useState({});
    const [dailyHigh, setDailyHigh] = useState('');
    const [dailyLow, setDailyLow] = useState('');

    function handleChange(e) {
        setCity(e.target.value);
    }

    async function fetchCityKey() {
        let cityInfo = await fetch(
            `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=wHt3xF6xVQGmPslYZJCZ1bg7MhzYFsDp&q=${city}`
        );
        let response = await cityInfo.json();
        setCityKey(response[0].Key);
    }

    async function fetchDailyForecast() {
        if (!cityKey) { return; }
        let forecastData = await fetch(
            `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=wHt3xF6xVQGmPslYZJCZ1bg7MhzYFsDp`
        );
        let response = await forecastData.json();
        console.log(response);
        setForecast(response);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetchCityKey();
        await fetchDailyForecast();
    }

    if (forecast.DailyForecasts) {
        setDailyHigh(forecast.DailyForecasts[0].Temperature.Maximum.Value);
        setDailyLow(forecast.DailyForecasts[0].Temperature.Minimum.Value);
    }

    return (
        <div className={classes.App}>
            <h1>Weather App</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => handleChange(e)} />
                <button>BUTTON</button>
            </form>
            <div>
                {forecast.length ? <div>Today's weather is: A high of {forecast.DailyForecasts[0].Temperature.Maximum.Value} and a low of {dailyLow} </div> : null}
                
            </div>
        </div>
    );
}

export default App;
