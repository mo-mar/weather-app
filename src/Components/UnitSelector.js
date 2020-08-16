import React from "react";
import styled from "styled-components";

const StyledUnitSelector = styled.div``;

const UnitContainer = styled.div`
  display: inline-block;
  background: papayawhip;
  padding: 8px 0;
  border: 2px solid black;
  border-radius: 5px;
`;

const CelsiusIcon = styled.span`
  width: 50%;
  background-color: ${(props) => props.color};
  padding: 8px 18px;
  color: white;
  font-size: 22px;
  transition: all 0.3s;
  i {
    color: tomato;
  }
`;

const FahrenheitIcon = styled.span`
  width: 50%;
  background-color: ${(props) => props.color};
  padding: 8px 18px;
  color: white;
  font-size: 22px;
  transition: all 0.2s;
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
