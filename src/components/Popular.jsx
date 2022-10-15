import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
import { device } from "./device";
import { MdInbox } from "react-icons/md";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPopular = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
        )
        .then((res) => {
          const data = res.data.recipes;
          setPopular(data);
        });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <PopularTitle>Popular recipes</PopularTitle>
      {isLoading === true ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Splide
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 2500,
            pauseOnHover: false,
            resetProgress: false,
            gap: 0.5,
            mediaQuery: "min",
            breakpoints: {
              375: {
                padding: "1rem",
              },
              425: {
                padding: "2rem",
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
              1440: {
                padding: "8%",
                gap: "0.5em",
                perPage: 4,
              },
              2560: {
                perPage: 7,
                padding: "-10%",
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 1.2rem;
  padding-bottom: 1rem;
  color: white;
  padding-top: 1rem;
`;

const Card = styled.div`
  height: 15rem;
  width: 18rem;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
  }
`;

const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const PopularTitle = styled.h3`
  font-family: "Comfortaa", cursive;

  @media ${device.tablet} {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
  @media ${device.laptopL} {
    margin-left: 1.5rem;
    font-size: 1.3rem;
  }
`;

export default Popular;
