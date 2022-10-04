import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

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
            console.log(data)
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
    <div>
      <h1>Gluten Free</h1>
      {isLoading === true ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Grid>
          {glutenFree.map((item) => {
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


export default GlutenFree