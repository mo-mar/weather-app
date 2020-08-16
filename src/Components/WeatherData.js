import React from "react";
import "../App.css";
import styled from "styled-components";

const StyledWeatherData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const CityName = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  font-size: 16px;
`;

const CurrentTemp = styled.div`
  font-size: 36px;
  font-family: "Lato", sans-serif;
  margin-bottom: 12px;
`;

const HighAndLow = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 100;
  margin-bottom: 12px;
  i {
    margin-right: 4px;
  }
`;

const WeatherData = (props) => {
  const _convertCelsiusToF = (C) => {
    return (C * 1.8 + 32).toFixed();
  };

  const currentTemp =
    props.unit === "celsius"
      ? `${parseInt(props.data.main.temp).toFixed()} ºC`
      : `${_convertCelsiusToF(props.data.main.temp)} °F`;

  const highInCelsius = parseInt(props.data.main.temp_max).toFixed();
  const lowInCelsius = parseInt(props.data.main.temp_min).toFixed();

  const high =
    props.unit === "celsius"
      ? highInCelsius + " ºC"
      : `${_convertCelsiusToF(props.data.main.temp_max)} °F`;

  const low =
    props.unit === "celsius"
      ? lowInCelsius + " ºC"
      : `${_convertCelsiusToF(props.data.main.temp_min)} °F`;

  const iconId = props.data.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <StyledWeatherData data-testid="weather-data" className="u-flex">
      <CityName>
        {props.data.name}, {props.data.sys.country}
      </CityName>
      <Icon>
        <img src={iconURL} alt="icon" />
      </Icon>
      <CurrentTemp>{currentTemp}</CurrentTemp>
      <HighAndLow>
        <div>
          <i className="fas fa-arrow-circle-up"></i>
          <span>{high}</span>
        </div>
        <div>
          <i className="fas fa-arrow-circle-down"></i>
          <span>{low}</span>
        </div>
      </HighAndLow>
    </StyledWeatherData>
  );
};

export default WeatherData;
