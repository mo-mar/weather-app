import React from 'react'
import App from '../../App';
import WeatherForm from '../../Components/WeatherForm';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders h1', () => {
  render(<App />);
  expect(screen.getByText('Weather App')).toBeInTheDocument();
});

test("renders WeatherForm", () => {
  render(<App />);
  expect(screen.getByTestId('weather-form')).toBeInTheDocument();
});

test("WeatherData is not rendered initially", () => {
  render(<App />);
  expect(screen.queryByTestId('weather-data')).not.toBeInTheDocument();
});

test("WeatherForm unit dropdown starts with celsius", () => {
    render(<App />);
    const dropdown = screen.queryByTestId("unit-dropdown");
    expect(dropdown).toBeInTheDocument();
    expect(screen.getByDisplayValue("Celsius")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("Fahrenheit")).not.toBeInTheDocument();
});

test("WeatherForm dropdown has celsius and fahrenheit options", () => {
  render(<App />);
  const dropdown = screen.queryByTestId('unit-dropdown');
  expect(dropdown).toBeInTheDocument();
  expect(screen.getByDisplayValue('Celsius')).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("unit-dropdown"), {
    target: { value: "fahrenheit" },
  });
  expect(screen.getByDisplayValue('Fahrenheit')).toBeInTheDocument();
});