import React from 'react'

const WeatherData = (props) => {
  
  const _convertCelsiusToF = (C) => {
    return (C * 1.8 + 32).toFixed();
  };

  const currentTemp = props.unit === "celsius" ? 
    `${parseInt(props.data.main.temp).toFixed()} ºC`
    : `${_convertCelsiusToF(props.data.main.temp)} °F`

  const highInCelcius = parseInt(props.data.main.temp_max).toFixed();
  const lowInCelcius = parseInt(props.data.main.temp_min).toFixed();

  const high = props.unit === "celsius" 
    ? highInCelcius + ' ºC'
    : `${_convertCelsiusToF(props.data.main.temp_max)} °F`;

  const low = props.unit === "celsius"
    ? lowInCelcius + ' ºC'
    : `${_convertCelsiusToF(props.data.main.temp_min)} °F`;

  return (
    <div>
      <div>The current temperature is {currentTemp}</div>
      Today's high will be {high}. The low will be {low}
    </div>
  )
}

export default WeatherData;