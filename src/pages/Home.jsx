import React from "react";
import Popular from "../components/Popular";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import Hero from "../components/Hero";
import backgroundImage from '../images/spicy-bg.jpg'
import { device } from "../components/device";

function Home() {
  return (
    <>
      <Wrapper>
      <Hero />
        <Searchbar />
      </Wrapper>
      <Popular />
      
    </>
  );
}

const Wrapper = styled.div`
  min-height: 30rem;
  padding-top: 3rem;
  background: url(${backgroundImage}) no-repeat fixed;
  background-position: top;
  background-size: 35rem;

  @media ${device.mobileL} {
    background: url(${backgroundImage}) no-repeat center fixed;
    background-size: cover;
  }
`;

export default Home;
