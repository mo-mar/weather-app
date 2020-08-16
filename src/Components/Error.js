import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
  font-size: 16px;
`;
export default function Error(props) {
  return (
    <ErrorContainer>
      {props.error ? <div>Error: {props.error}</div> : null}
    </ErrorContainer>
  );
}
