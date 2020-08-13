import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  margin-left: 8px;
`;

export default function WeatherForm(props) {
  return (
      <div>
        <Form onSubmit={props.handleSubmit} data-testid="weather-form">
          <label htmlFor="unit">
            <span>Show temperatures in</span>
            <Select id="unit" onChange={props.handleDropdownChange} data-testid="unit-dropdown">
              <option defaultValue="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </Select>
          </label>
          <input type="text" onChange={(e) => props.handleChange(e)} />
          <button>BUTTON</button>
        </Form>
      </div>
  )
}