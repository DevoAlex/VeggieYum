import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";

function GlutenFree() {
  const [glutenFree, setGlutenFree] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getGluten = async () => {
    const check = localStorage.getItem("gluten");

    if (check) {
      setGlutenFree(JSON.parse(check));
    } else {
      setIsLoading(true);
      try {
        await axios
          .get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=gluten+free,vegetarian&number=10`
          )
          .then((res) => {
            const data = res.data.recipes;
            localStorage.setItem("gluten", JSON.stringify(data));
            setGlutenFree(data);
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
    getGluten();
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
          <h2>Gluten Free</h2>
          <Grid>
            {glutenFree.map((item) => {
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
  grid-gap: 1rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 0.8rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Wrapper = styled.div`
  background-color: #01121c;
  padding-top: 0.1rem;
  text-align: center;
  h2 {
    padding-bottom: 1rem;
    font-family: "Comfortaa", cursive;
    color: white;
    padding-top: 1rem;
  }
`;
const Slink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem 1rem 0rem 1rem;
`;

export default GlutenFree;
