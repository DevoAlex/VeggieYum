import React from "react";
import styled from "styled-components";
import { device } from "./device";

function Hero() {
  return (
    <Wrapper>
      <EatHealtyWrapper>
        <h2>Eat healty</h2>
      </EatHealtyWrapper>
      <EveryDayWrapper>
        <h2>Every day</h2>
      </EveryDayWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  text-align: center;
  font-family: "Comfortaa", cursive;
  font-size: 1.5rem;
  color: white;
  padding-top: 2rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.desktop} {
    font-size: 2.5rem;
  }
`;
const EatHealtyWrapper = styled.div`
  margin-left: -2rem;

  @media ${device.desktop} {
    margin-left: -4rem;
  }
`;
const EveryDayWrapper = styled.div`
  margin-top: -4rem;
  margin-left: 3rem;

  @media ${device.tablet} {
    margin-top: -5rem;
  }
  @media ${device.desktop} {
    margin-top: -6rem;
    margin-left: 5rem;
  }
`;

export default Hero;
