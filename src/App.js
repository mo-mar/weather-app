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

  const handleDropdownChange = () => {
    if (tempUnit === "celsius") {
      setTempUnit("fahrenheit");
    } else {
      setTempUnit("celsius");
    }
  };

  const getForecast = async () => {
    setError("");
    await axios
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
        <h1 className="mb-8 u-text-center">Weather App</h1>
        <UnitSelector
          className={classes.unitSelector}
          handleDropdownChange={handleDropdownChange}
          unit={tempUnit}
        />
        <WeatherForm handleSubmit={handleSubmit} handleChange={handleChange} />
        {forecast.main ? (
          <WeatherData className="mb-8" data={forecast} unit={tempUnit} />
        ) : null}
        <Error error={error} />
      </div>
    </div>
  );
}

export default App;
