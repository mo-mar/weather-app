import React from "react";
import styled from "styled-components";

// #F1F1F2 - OVERCAST
// #BCBABE  - Warm Gray
// #A1D6E2 - ICE
// #1995AD - GLACIER BLUE

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Input = styled.div`
  padding: 6px 2px;
  margin: 12px 0;
  border-bottom: 2px solid black;
  position: relative;
  input {
    border: none;
    padding: 10px 2px;
    width: 220px;
  }
  input:focus {
    outline: 1px solid black;
  }
  i {
    margin-left: 4px;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 5px;
  }
`;

export default function WeatherForm(props) {
  return (
    <StyledForm onSubmit={props.handleSubmit} data-testid="weather-form">
      <Input>
        <input
          placeholder="Location"
          type="text"
          onChange={(e) => props.handleChange(e)}
        />
        <i onClick={props.handleSubmit} className="fas fa-search"></i>
      </Input>
    </StyledForm>
  );
}
