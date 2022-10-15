import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favRecipes, setFavRecipes] = useState([]);

  //add favorite recipe function
  const addFavRecipe = (id, title, image) => {
    setFavRecipes([...favRecipes, { id, title, image }]);
  };

  //remove favorite recipe function
  const removeFavRecipe = (id) => {
    setFavRecipes(favRecipes.filter((recipe) => recipe.id !== id));
  };

  //search for favorites in local storage at first load
  useEffect(() => {
    const check = localStorage.getItem("Favorite recipe");
    if (check) {
      setFavRecipes(JSON.parse(check));
    }
  }, []);

  //update local storage when favRecipes changes
  useEffect(() => {
    localStorage.setItem("Favorite recipe", JSON.stringify(favRecipes));
  }, [favRecipes]);

  return (
    <FavoritesContext.Provider
      value={{ favRecipes, addFavRecipe, removeFavRecipe }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
