import React from "react";
import styled from "styled-components";

const StyledUnitSelector = styled.div``;

const UnitContainer = styled.div`
  padding: 8px 0;
  display: block;
  width: 100%;
  text-align: center;
`;

const CelsiusIcon = styled.span`
  background-color: ${(props) => props.color};
  padding: 8px 18px;
  color: white;
  font-size: 22px;
  transition: all 0.3s;
  border-radius: 10px;
  i {
    color: #1995ad;
  }
`;

const FahrenheitIcon = styled.span`
  background-color: ${(props) => props.color};
  padding: 8px 18px;
  color: white;
  font-size: 22px;
  transition: all 0.2s;
  border-radius: 10px;
  i {
    color: tomato;
  }
`;

export default function UnitSelector(props) {
  return (
    <StyledUnitSelector>
      {/* <span>Show temperatures in</span> */}
      <UnitContainer onClick={props.handleDropdownChange}>
        <CelsiusIcon
          color={props.unit === "celsius" ? "#1995AD" : "white"}
          className="celsius"
        >
          {props.unit === "fahrenheit" ? (
            <i class="fas fa-thermometer-half"></i>
          ) : (
            <span>C</span>
          )}
        </CelsiusIcon>
        <FahrenheitIcon
          color={props.unit === "fahrenheit" ? "tomato" : "white"}
          className="fahrenheit"
        >
          {props.unit === "celsius" ? (
            <i class="fas fa-thermometer-half"></i>
          ) : (
            <span>F</span>
          )}
        </FahrenheitIcon>
      </UnitContainer>
    </StyledUnitSelector>
  );
}
