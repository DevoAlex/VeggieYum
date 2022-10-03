import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      setIsLoading(true);
      try {
        await axios
          .get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
          )
          .then((res) => {
            const data = res.data.recipes;

            localStorage.setItem("popular", JSON.stringify(data));
            setPopular(data);
          });
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <h3>Popular recipes</h3>
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
            gap: 1,
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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
  margin: 4rem 0rem;
  margin-left: 1.2rem;
`;

const Card = styled.div`
  height: 15rem;
  width: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
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

export default Popular;
