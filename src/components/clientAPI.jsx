import axios from "axios";

export const getFastRecipes = async () => {
  try {
    let fastRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=20`
    );
    return fastRecipes.data.recipes;
  } catch (error) {
    console.log(error);
  }
};

export const getGlutenFreeRecipes = async () => {
  try {
    let glutenFree = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=gluten+free,vegetarian&number=20`
    );
    return glutenFree.data.recipes;
  } catch (error) {
    console.log(error);
  }
};

export const getVeganRecipes = async () => {
  try {
    let veganRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=20`
    );
    return veganRecipes.data.recipes;
  } catch (error) {
    console.log(error);
  }
};

export const getSearched = async (name) => {
  try {
    let searchedRecipesArray = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=20`
    );
    return searchedRecipesArray.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetails = async (name) => {
  try {
    let recipeDetails = await axios.get(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return recipeDetails.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularRecipes = async () => {
  try {
    let popularRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
    );
    return popularRecipes.data.recipes;
  } catch (error) {
    console.log(error);
  }
};

// export const getRecipeInfo = async (id) => {
//   let recipeInfo = await axios.get(
//     `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
//   );
//   return recipeInfo.data;
// };
