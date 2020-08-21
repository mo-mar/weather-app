import React from "react";
import App from "../../App";
import { render, screen } from "@testing-library/react";

test("renders h1", () => {
  render(<App />);
  expect(screen.getByText("My Generic Weather App")).toBeInTheDocument();
});

test("renders WeatherForm", () => {
  render(<App />);
  expect(screen.getByTestId("weather-form")).toBeInTheDocument();
});

test("WeatherData is not rendered initially", () => {
  render(<App />);
  expect(screen.queryByTestId("weather-data")).not.toBeInTheDocument();
});
