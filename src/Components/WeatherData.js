import React from 'react'
import '../App.css';
import styled from "styled-components";

const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

const CityName = styled.div`
  font-size: 24px;
  font-weight: 700;
`

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
    <TempContainer className="u-flex">
        <CityName>
          {props.data.name}, {props.data.sys.country}
        </CityName>
        <div>The current temperature is {currentTemp}</div>
        Today's high will be {high}. The low will be {low}
    </TempContainer>
  );
}

export default WeatherData;