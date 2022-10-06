import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import glutenIcon from "../images/gluten-icon.png";
import dairyIcon from "../images/dairy-icon.png";
import veganIcon from "../images/vegan-icon.png";

function Recipe() {
  const [details, setDetails] = useState({});

  let params = useParams();

  const fetchDetails = async () => {
    try {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setDetails(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      <Searchbar />
      <Wrapper>
      <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        </Wrapper>
        <IconWrapper>
        {details.glutenFree && <IconImage> <img src={glutenIcon}/> </IconImage>}
        {details.dairyFree && <IconImage> <img src={dairyIcon}/> </IconImage>}
        {details.vegan && <IconImage> <img src={veganIcon}/> </IconImage>}
        </IconWrapper>
      <h4>Ingredients</h4>
      <ul>
        {details.extendedIngredients.map((item) => {
            return(
                <li>{item.original}</li>
            )
        })}
      </ul>
      
      <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  img {
    width: 100%;
    border-radius: 2rem;
  }
`;
const IconWrapper = styled.div`
    display: flex;
    gap: 0.4rem;
`
const IconImage =styled.div`
    height: 1.5rem;
    width: 1.5rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export default Recipe;
