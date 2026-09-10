import recipeView from './views/RecipeViews.js';
import * as model from './model.js';

//import Fraction from 'fractions.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

async function controlRecipes() {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);

    if (!id) return;

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
}

loadRecipe = async function (id) {
  try {
    const resp = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
    );
    const data = await resp.json();

    state.recipe = {};
    state.recipe = data.data.recipe;

    state.recipe = {
      id: recipe.id,
      title: recipe.title, //title
      publisher: recipe.publisher, //done
      sourceUrl: recipe.source_url, //done
      image: recipe.image_url, //done
      servings: recipe.servings, //done
      cookTime: recipe.cooking_time, //done
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
  } catch (err) {
    console.error(`${err}`);
  }
};
const ev = ['hashchange', 'load'];

ev.forEach(e => window.addEventListener(e, controlRecipes));

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
