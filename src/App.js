import React, { useState } from "react";
import * as classes from "./App.module.css";

function App() {
    const [city, setCity] = useState("");
    const [cityKey, setCityKey] = useState(null);
    const [forecast, setForecast] = useState({});

    async function fetchCityKey() {
        let cityInfo = await fetch(
            `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=wHt3xF6xVQGmPslYZJCZ1bg7MhzYFsDp&q=${city}`
        );
        let response = await cityInfo.json();
        setCityKey(await response[0].Key);
    }

    async function fetchDailyForecast() {
        let forecastData = await fetch(
            `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=wHt3xF6xVQGmPslYZJCZ1bg7MhzYFsDp`
        );
        let response = await forecastData.json();
        console.log(response);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetchCityKey();
        fetchDailyForecast();
    }

    return (
        <div className={classes.App}>
            <h1>Weather App</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setCity(e.target.value)} />
                <button>BUTTON</button>
            </form>
        </div>
    );
}

export default App;
