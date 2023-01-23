"use strict";

const axios = require("axios");
const recipeModel = require("../models/recipeModel");

async function getRecipeAPIHandler(req, res) {
  const QUEERY = await req.body.queery;

  const dietType = await req.body.diet;
  let diet = "";
  if (typeof dietType !== "undefined" && dietType !== "") {
    diet = `&diet=${req.body.diet}`;
  }
  const healthType = await req.body.health;
  //   healthType.forEach(item)
  let health = "";
  if (typeof healthType !== "undefined" && healthType !== "") {
    health = `&health=${req.body.health}`;
  }

  const cuisineType = await req.body.cuisineType;
  let cuisine = "";
  if (typeof cuisineType !== "undefined" && cuisineType !== "") {
    cuisine = `&cuisineType=${req.body.cuisineType}`;
  }

  const mealType = await req.body.mealType;
  let meal = "";
  if (typeof mealType !== "undefined" && mealType !== "") {
    meal = `&mealType=${req.body.mealType}`;
  }

  const dishType = await req.body.dishType;
  let dish = "";
  if (typeof dishType !== "undefined" && dishType !== "") {
    dish = `&dishType=${req.body.dishType}`;
  }
  const ID = process.env.APP_ID;
  const KEY = process.env.APP_KEY;
  let allRecipe = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${QUEERY}&app_id=${ID}&app_key=${KEY}${diet}${health}${cuisine}${meal}${dish}`
  );
  console.log(allRecipe.data);
  res.send(allRecipe.data);
}

module.exports = { getRecipeAPIHandler };
