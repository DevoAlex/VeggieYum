import { React, useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContextProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BiChevronsLeft} from 'react-icons/bi'
import {FaTrashAlt} from 'react-icons/fa'
import Searchbar from "../components/Searchbar";

function Favorites() {
  const { favRecipes } = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);

  const { removeFavRecipe } = useContext(FavoritesContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <>
      
      {isLoading && (
        <Wrapper>
          <LoadingSpinner />
        </Wrapper>)}
       
        {!isLoading && favRecipes.length > 0 &&
        (<Wrapper>
        <Searchbar />
        <h2>Favorite recipes</h2>
          <Grid>
          
            {favRecipes.map((item) => {
              return (
                <LinkWrapper>
                <Slink to={"/recipe/" + item.id} key={item.id}>
                  
                    <img src={item.image} alt={item.title} />
                    </Slink>
                    <TrashWrapper>
                    <h4>{item.title}</h4>
                    <Button onClick={() => {
                      removeFavRecipe(item.id)
                    }}>
                      
                      <FaTrashAlt style={{ height: '1rem', width: '1rem'}}/>
                    </Button>
                    </TrashWrapper>
                    </LinkWrapper>
              );
            })}
          </Grid>
        </Wrapper>)
      }

      {!isLoading && favRecipes.length === 0 && (
        <EmptyFavorite>
        <h2>Favorites recipes</h2>
          <h4>No favorite recipes.</h4>
          <Link to={'/'} style={{textDecoration: 'none'}}>
          
            <div>
            <BiChevronsLeft style={{marginLeft: '1rem', height: '1.5rem', width: '1.5rem'}}/>
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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));  
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
  background-color: #01121C;
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
    h5 {
      font-weight: 400;
      
    }
  }
  h2{
    font-family: "Comfortaa", cursive;
  }
`

const Button = styled.button`
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: white;
`

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
`

const LinkWrapper = styled.div`
  padding: 1rem 1rem 0rem 1rem;
`
const Wrapper = styled.div`
  background-color: #01121C;
  padding-top: 0.1rem;
  text-align: center;
  font-family: "Comfortaa", cursive;
  h2{
    color: white;
  }
`

export default Favorites;
