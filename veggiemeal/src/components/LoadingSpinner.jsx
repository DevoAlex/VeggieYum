import React from "react";
import styled from "styled-components";

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

const Spinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  margin-top: 4rem;
  width: 50px;
  height: 50px;
  border: 10px solid #13808633; /* Light grey */
  border-top: 10px solid #138086; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;

const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default LoadingSpinner;
