import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();

  const getSearched = (name) => {
    setIsLoading(true);
    try {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        )
        .then((res) => {
          console.log(res.data.results);
          setSearchedRecipes(res.data.results);
        });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      <h1>Searched</h1>
      {isLoading === true ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Grid>
          {searchedRecipes.map((item) => {
            return (
              <Card key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Card>
            );
          })}
        </Grid>
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
`;

export default Searched;
