import React from 'react'

const WeatherData = (props) => {
  const _convertKelvinToC = (Kelvin) => {
    return (Kelvin - 273.15).toFixed();
  };

  const _convertKelvinToF = (Kelvin) => {
    return (Kelvin * 1.8 - 459.67).toFixed();
  };

  const high =
      props.unit === "celsius"
          ? `${_convertKelvinToC(props.data.main.temp_max)} ºC`
          : `${_convertKelvinToF(props.data.main.temp_max)} °F`;

  const low =
      props.unit === "celsius"
          ? `${_convertKelvinToC(props.data.main.temp_min)} ºC`
          : `${_convertKelvinToF(props.data.main.temp_min)} °F`;

  return (
    <div>
      Today's high will be {high}. The low will be {low}
    </div>
  )
}

export default WeatherData;