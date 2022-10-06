import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

function Fast() {
  const [fast, setFast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFastRecipes = async () => {
    const check = localStorage.getItem("fast");

    if (check) {
      setFast(JSON.parse(check));
    } else {
      setIsLoading(true);
      try {
        await axios
          .get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
          )
          .then((res) => {
            const data = res.data.recipes;
            console.log(data);
            localStorage.setItem("fast", JSON.stringify(data));
            setFast(data);
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
    getFastRecipes();
  }, []);

  return (
    <div>
      <h1>Fast Recipes</h1>
      {isLoading === true ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Searchbar />
          <Grid>
            {fast
              .filter((item) => item.readyInMinutes <= 45)
              .map((item) => {
                return (
                  <Link to={"/recipe/" + item.id} key={item.id}>
                    <Card>
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                      <p>
                        Ready in <strong>{item.readyInMinutes}</strong> minutes
                      </p>
                    </Card>
                  </Link>
                );
              })}
          </Grid>
        </div>
      )}
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
  p {
    text-align: center;
  }
`;

export default Fast;
