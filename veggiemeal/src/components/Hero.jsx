import React from "react";
import styled from "styled-components";

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
`;
const EatHealtyWrapper = styled.div`
    margin-left: -2rem;
`
const EveryDayWrapper = styled.div`
    margin-top: -4rem;
    margin-left: 3rem;
`

export default Hero;
