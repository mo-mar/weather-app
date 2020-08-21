import React from "react";
import "../App.css";
import styled from "styled-components";

const StyledWeatherData = styled.div`
  width: 100%;
  max-width: 400px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr auto;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  margin: 24px auto 0 auto;
  text-align: center;
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
  margin-bottom: 12px;
`;

const FeelsLikeTemp = styled.div`
  font-size: 22px;
  font-weight: 100;
`;

const Windspeed = styled.div`
  font-size: 16px;
  i {
    margin-right: 4px;
  }
`;

const Humidity = styled.div`
  font-size: 16px;
  i {
    margin-right: 4px;
  }
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

const PrimaryData = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherData = (props) => {
  const _convertCelsiusToF = (C) => {
    return (C * 1.8 + 32).toFixed();
  };

  const convertToKiloPerHour = (metresPerSecond) => {
    return (metresPerSecond * 18) / 5;
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

  const feelsLikeTemp =
    props.unit === "celsius"
      ? `${parseInt(props.data.main.feels_like).toFixed()} ºC`
      : `${_convertCelsiusToF(props.data.main.feels_like)} °F`;

  const humidity = `${parseInt(props.data.main.humidity).toFixed()} %`;

  const windSpeed = `${convertToKiloPerHour(
    props.data.wind.speed
  ).toFixed()} km/h`;

  return (
    <StyledWeatherData data-testid="weather-data" className="u-flex">
      <PrimaryData>
        <CityName>
          {props.data.name}, {props.data.sys.country}
        </CityName>
        <Icon>
          <img src={iconURL} alt="icon" />
        </Icon>
        <CurrentTemp>{currentTemp}</CurrentTemp>
        <FeelsLikeTemp>Feels like: {feelsLikeTemp}</FeelsLikeTemp>
      </PrimaryData>
      <SecondaryData>
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
        <Humidity title="humidity">
          <i className="fas fa-tint"></i> {humidity}
        </Humidity>
        <Windspeed title="wind speed">
          <i className="fas fa-wind"></i>
          {windSpeed}
        </Windspeed>
      </SecondaryData>
    </StyledWeatherData>
  );
};

export default WeatherData;
