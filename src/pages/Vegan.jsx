import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { device } from "../components/device";

function Vegan() {
  const [vegan, setVegan] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVegan = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=20`
        )
        .then((res) => {
          const data = res.data.recipes;
          setVegan(data);
        });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getVegan();
  }, []);

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <LoadingSpinner />
        </Wrapper>
      ) : (
        <Wrapper>
          <Searchbar />
          <h2>Vegan recipes</h2>
          <Grid>
            {vegan.map((item) => {
              return (
                <Slink to={"/recipe/" + item.id} key={item.id}>
                  <Card>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </Card>
                </Slink>
              );
            })}
          </Grid>
        </Wrapper>
      )}
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  @media ${device.mobileL} {
    grid-gap: 0.5rem;
  }
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.6) 0px 19px 38px, rgb(0, 0, 0, 0.5) 0px 15px 12px;
  border-radius: 1rem;
  margin-top: 1.5rem;
  img {
    width: 100%;
    border-radius: 0.8rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }

  @media ${device.tablet} {
    margin-top: 2.5rem;
    min-height: 21rem;
  }
`;

const Slink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem 1rem 0rem 1rem;
`;

const Wrapper = styled.div`
  padding-top: 0.1rem;
  text-align: center;
  h2 {
    padding-bottom: 1rem;
    font-family: "Comfortaa", cursive;
    color: white;
    padding-top: 1rem;
  }

  @media ${device.tablet} {
    margin-bottom: 2rem;
    padding-top: 2rem;
    h2 {
      padding-top: 1.8rem;
      padding-bottom: 1.8rem;
    }
  }
`;

export default Vegan;
