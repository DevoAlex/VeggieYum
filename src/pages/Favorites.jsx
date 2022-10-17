import { React, useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContextProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiChevronsLeft } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import Searchbar from "../components/Searchbar";
import { device } from "../components/device";

function Favorites() {
  const { favRecipes } = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);
  const { removeFavRecipe } = useContext(FavoritesContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading && (
        <Wrapper>
          <LoadingSpinner />
        </Wrapper>
      )}

      {!isLoading && favRecipes.length > 0 && (
        <Wrapper>
          <Searchbar />
          <h2>Favorite recipes</h2>
          <Grid>
            {favRecipes.map((item) => {
              return (
                <Card key={item.id}>
                  <Slink to={"/recipe/" + item.id}>
                    <img src={item.image} alt={item.title} />
                  </Slink>
                  <TrashWrapper>
                    <h4>{item.title}</h4>
                    <Button
                      onClick={() => {
                        removeFavRecipe(item.id);
                      }}
                    >
                      <FaTrashAlt style={{ height: "1rem", width: "1rem" }} />
                    </Button>
                  </TrashWrapper>
                </Card>
              );
            })}
          </Grid>
        </Wrapper>
      )}

      {!isLoading && favRecipes.length === 0 && (
        <EmptyFavorite>
          <h2>Favorites recipes</h2>
          <h4>No favorite recipes.</h4>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div>
              <BiChevronsLeft
                style={{
                  marginLeft: "1rem",
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
              <h5>Back to Homepage</h5>
            </div>
          </Link>
        </EmptyFavorite>
      )}
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 25rem));
`;

const Slink = styled(Link)`
  img {
    width: 100%;
    border-radius: 2rem;
  }
`;

const EmptyFavorite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  color: white;
  div {
    border-radius: 0.3rem;
    height: 2rem;
    width: 15rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.1, 1.1);
    }
    :active {
      transform: scale(0.9, 0.9);
    }

    h5 {
      font-weight: 400;
    }
  }
  h2 {
    font-family: "Comfortaa", cursive;
  }

  @media ${device.tablet} {
    padding-top: 1.5rem;
    h4 {
      padding-top: 1rem;
    }
    div {
      margin-top: 1rem;
    }
  }
  @media ${device.desktop} {
    padding-top: 3rem;
    h4 {
      padding-top: 1.5rem;
    }
    div {
      margin-top: 1.5rem;
    }
  }
`;

const Button = styled.button`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    color: orange;
  }
`;

const TrashWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: 1rem;
  h4 {
    text-align: center;
    color: white;
  }
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgb(0, 0, 0, 0.4) 0px 15px 12px;
  margin: 1rem;
  border-radius: 1rem;
  margin-top: 1.5rem;
  padding: 1rem 2rem 0rem 2rem;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.1, 1.1);
  }

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
const Wrapper = styled.div`
  padding-top: 0.1rem;
  text-align: center;
  font-family: "Comfortaa", cursive;
  h2 {
    color: white;
  }
`;

export default Favorites;
