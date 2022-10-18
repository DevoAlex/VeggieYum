import { React, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import glutenIcon from "../images/gluten-icon.png";
import dairyIcon from "../images/dairy-icon.png";
import veganIcon from "../images/vegan-icon.png";
import LoadingSpinner from "../components/LoadingSpinner";
import { FavoritesContext } from "../context/FavoritesContextProvider";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { device } from "../components/device";
import { fetchDetails } from "../components/clientAPI";

function Recipe() {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("ingredients");
  const [favorite, setFavorite] = useState(false);
  const { favRecipes, addFavRecipe, removeFavRecipe } =
    useContext(FavoritesContext);

  let params = useParams();

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchDetails(params.name).then((response) => setDetails(response));
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [params.name]);

  const handleFavorite = () => {
    favorite
      ? removeFavRecipe(details.id)
      : addFavRecipe(details.id, details.title, details.image);
    setFavorite(!favorite);
  };

  useEffect(() => {
    favRecipes.find((fav) => fav.id === Number(params.name))
      ? setFavorite(true)
      : setFavorite(false);
  }, [favRecipes, params.name]);

  return (
    <>
      {isLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Wrapper>
          <div>
            <h2>{details.title}</h2>
            <span>
              <img src={details.image} alt={details.title} />
            </span>
          </div>
          <IconWrapper>
            <IconImageContainer>
              {details.glutenFree && (
                <IconImage>
                  <img src={glutenIcon} />
                </IconImage>
              )}
              {details.dairyFree && (
                <IconImage>
                  <img src={dairyIcon} />
                </IconImage>
              )}
              {details.vegan && (
                <IconImage>
                  <img src={veganIcon} />
                </IconImage>
              )}
            </IconImageContainer>
            <ClockContainer>
              <div>
                <BsClock />
              </div>
              <p>{details.readyInMinutes}</p>
            </ClockContainer>
            {favorite ? (
              <button onClick={handleFavorite}>
                <MdFavorite
                  style={{ height: "1.5rem", width: "1.5rem", color: "red" }}
                />
              </button>
            ) : (
              <button onClick={handleFavorite}>
                <MdFavoriteBorder
                  style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                />
              </button>
            )}
          </IconWrapper>
          <span>
            <Button
              className={activeTab === "ingredients" ? "active" : ""}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </Button>
            <Button
              className={activeTab === "instructions" ? "active" : ""}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </Button>
          </span>
          {activeTab === "ingredients" ? (
            <InstructionsWrapper>
              <ul>
                {details.extendedIngredients?.map((item) => {
                  return <li key={item.id}>{item.original}</li>;
                })}
              </ul>

              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </InstructionsWrapper>
          ) : (
            <InstructionsWrapper>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </InstructionsWrapper>
          )}
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  color: white;
  .active {
    background: #ef9903;
    color: white;
  }
  h2 {
    padding-bottom: 2rem;
    font-family: "Comfortaa", cursive;
    text-align: center;
  }
  li {
    font-size: 1.1rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    margin-top: 2rem;
    font-size: 1.1rem;
    a {
      text-decoration: none;
      color: orange;
    }
  }
  img {
    width: 100%;
    border-radius: 2rem;
  }
  span {
    display: flex;
    justify-content: center;
  }

  @media ${device.tablet} {
    img {
      width: 80%;
    }
  }
  @media ${device.laptop} {
    img {
      width: 60%;
    }
  }
  @media ${device.laptopL} {
    img {
      width: 40%;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    position: relative;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    height: 2rem;
    width: 2rem;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.4, 1.4);
    }
    :active {
      transform: scale(1.1, 1.1);
    }
  }

  @media ${device.tablet} {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media ${device.laptop} {
    padding-left: 9rem;
    padding-right: 9rem;
  }
  @media ${device.laptopL} {
    padding-left: 15rem;
    padding-right: 15rem;
  }
  @media ${device.desktop} {
    padding-left: 20rem;
    padding-right: 20rem;
  }
`;

const IconImageContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  padding-left: 0.8rem;
`;

const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  div {
    position: relative;
    top: 18%;
  }
  p {
    position: relative;
    top: 5%;
  }
`;

const IconImage = styled.div`
  margin-top: 2rem;
  height: 1.5rem;
  width: 1.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  height: 3rem;
  width: 7rem;
  color: #313131;
  background: white;
  border: none;
  margin-top: 2rem;
  margin-left: 1.3rem;
  font-weight: 600;
  border-radius: 0.3rem;
  font-family: "Comfortaa", cursive;
  cursor: pointer;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.15, 1.15);
  }
  :active {
    transform: scale(1, 1);
  }
`;

const InstructionsWrapper = styled.div`
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  line-height: 1.5rem;
  @media ${device.tablet} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  @media ${device.laptopL} {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export default Recipe;
