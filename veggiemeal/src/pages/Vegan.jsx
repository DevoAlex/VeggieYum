import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

function Vegan() {
  const [vegan, setVegan] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVegan = async () => {
    const check = localStorage.getItem("vegan");

    if (check) {
      setVegan(JSON.parse(check));
    } else {
      setIsLoading(true);
      try {
        await axios
          .get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=10`
          )
          .then((res) => {
            const data = res.data.recipes;
            localStorage.setItem("vegan", JSON.stringify(data));
            setVegan(data);
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
    getVegan();
  }, []);

  return (
    <div>
      <h1>Vegan</h1>
      {isLoading === true ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Grid>
          {vegan.map((item) => {
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

export default Vegan;
