import React from "react";
import * as classes from "./App.module.css";

async function fetchCityKey(cityName) {
    let citiesMatchingString = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=wHt3xF6xVQGmPslYZJCZ1bg7MhzYFsDp&q=${cityName}`
    ).then((response) => response.json());
    console.log(citiesMatchingString);
}

function App() {
    return (
        <div className={classes.App}>
            <h1>Weather App</h1>
            <input type="text" />
            <button onClick={fetchCityKey}>BUTTON</button>
        </div>
    );
}

export default App;
