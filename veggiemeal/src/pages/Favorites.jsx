import { React, useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContextProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BiChevronsLeft} from 'react-icons/bi'
import {FaTrashAlt} from 'react-icons/fa'

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
      <h1>Favorites</h1>
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>)}
       
        {!isLoading && favRecipes.length > 0 &&
        (<div>
          <Grid>
            {favRecipes.map((item) => {
              return (
                <Slink to={"/recipe/" + item.id} key={item.id}>
                  
                    <img src={item.image} alt={item.title} />
                    <TrashWrapper>
                    <h4>{item.title}</h4>
                    <Button onClick={() => {
                      removeFavRecipe(item.id)
                    }}>
                      
                      <FaTrashAlt style={{ height: '1rem', width: '1rem'}}/>
                    </Button>
                    </TrashWrapper>
                </Slink>
              );
            })}
          </Grid>
        </div>)
      }

      {!isLoading && favRecipes.length === 0 && (
        <EmptyFavorite>
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
  grid-gap: 3rem;
  
`;

const Slink = styled(Link)`
text-decoration: none;
color: black;
padding: 0rem 1rem;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 0rem 1rem;
  }
`;

const EmptyFavorite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

const Button = styled.button`
  border-radius: 0.3rem;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
`

const TrashWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`

export default Favorites;
