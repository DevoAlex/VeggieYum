import axios from "axios";

export const getFastRecipes = async () => {
  let fastRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=20`
  );
  return fastRecipes.data.recipes;
};

export const getGlutenFreeRecipes = async () => {
  let glutenFree = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=gluten+free,vegetarian&number=20`
  );
  return glutenFree.data.recipes;
};

export const getVeganRecipes = async () => {
  let veganRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=20`
  );
  return veganRecipes.data.recipes;
};

export const getSearched = async (name) => {
  let searchedRecipesArray = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=20`
  );
  return searchedRecipesArray.data.results;
};

export const fetchDetails = async (name) => {
  let recipeDetails = await axios.get(
    `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return recipeDetails.data;
};

export const getPopularRecipes = async () => {
  let popularRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
  );
  return popularRecipes.data.recipes;
};
