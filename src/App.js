import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./Components/WeatherData";
import WeatherForm from "./Components/WeatherForm";
import UnitSelector from "./Components/UnitSelector";
import Error from "./Components/Error";
import { myKey as apiKey } from "./keys.json";
import "./App.css";
import * as classes from "./App.module.css";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState({});
  const [error, setError] = useState("");
  const [tempUnit, setTempUnit] = useState("celsius");

  const handleChange = (event) => {
    let city = event.target.value;
    setCity(city);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getForecast();
  };

  const handleUnitChange = () => {
    if (tempUnit === "celsius") {
      setTempUnit("fahrenheit");
    } else {
      setTempUnit("celsius");
    }
  };

  const getForecast = () => {
    setError("");
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setForecast(response.data);
      })
      .catch((error) => {
        if (!error) {
          alert("Something went wrong. Please try again.");
          return;
        }
        setError(error.response.data.message);
        setForecast("");
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.App}>
        <h1 className="u-text-center">My Generic Weather App</h1>
        <div>
          <UnitSelector
            className={classes.unitSelector}
            handleUnitChange={handleUnitChange}
            unit={tempUnit}
          />
          <WeatherForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className="l-grid-align-self-start">
          {forecast.main ? (
            <WeatherData className="mb-8" data={forecast} unit={tempUnit} />
          ) : null}
          <Error error={error} />
        </div>
        <footer>
          <div>
            Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mo-mar"
            >
              Mohamed Omar.{" "}
            </a>
            <br />
            All data pulled from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openweathermap.org/"
            >
              OpenWeatherMap.
            </a>{" "}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
