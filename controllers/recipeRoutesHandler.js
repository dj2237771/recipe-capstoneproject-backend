"use strict";

const axios = require("axios");
const recipeModel = require("../models/recipeModel");

async function getRecipeAPIHandler(req, res) {
  const QUEERY = await req.body.queery;

  // Looking at the body and sending api request acourding to the paremters defined by the request.
  const dietType = await req.body.diet;
  let diet = "";
  if (typeof dietType !== "undefined" && dietType !== "") {
    diet = `&diet=${req.body.diet}`;
  }

  // Passing multyple parameters into api request eg  "health": [ "sugar-conscious","kidney-friendly","DASH", "dairy-free" ]
  const healthType = await req.body.health;
  //   console.log(healthType);
  let healthArr = [];
  var health = "";
  if (typeof healthType !== "undefined" && healthType.length !== 0) {
    healthType.forEach((item) => {
      healthArr.push(`&health=${item}`);
    });
  }
  health = healthArr.join("");
  console.log(health);

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

async function getFavRecipeHandler(req, res) {
  let allFavRecipe = await recipeModel.find({ userName: userName });
  res.send(allFavRecipe);
}

async function addFavRecipeHandler(req, res) {
  const {
    userName,
    recipeName,
    calories,
    diet,
    health,
    cuisin,
    meal,
    dish,
    ingredients,
    image,
    source,
    sourceurl,
  } = req.body;
  let newRecipe = await recipeModel.create({
    userName: userName,
    recipeName: recipeName,
    calories: calories,
    dietLabels: diet,
    healthLabels: health,
    cuisineType: cuisin,
    mealType: meal,
    dishType: dish,
    ingredientLines: ingredients,
    image: image,
    source: source,
    sourceURL: sourceurl,
  });
  res.send(newRecipe);
}

async function updateFavRecipeHandler(req, res) {
  const id = req.params.id;
  const {
    recipeName,
    calories,
    diet,
    health,
    cuisin,
    meal,
    dish,
    ingredients,
    image,
    source,
    sourceurl,
  } = req.body;
  await recipeModel.findByIdAndUpdate(id, {
    recipeName,
    calories,
    diet,
    health,
    cuisin,
    meal,
    dish,
    ingredients,
    image,
    source,
    sourceurl,
  });
  let allRecipe = await recipeModel.find({});
  console.log(allRecipe);
  res.send(allRecipe);
}

async function deleteFavRecipeHandler(req, res) {
  const { id } = req.params;
  await recipeModel.findByIdAndDelete(id);
  let allRecipe = await recipeModel.find({});
  res.send(allRecipe);
}
async function getAllRecipe() {
  let allRecipe = await recipeModel.find({});
  return allRecipe;
}
module.exports = {
  getRecipeAPIHandler,
  getFavRecipeHandler,
  addFavRecipeHandler,
  updateFavRecipeHandler,
  deleteFavRecipeHandler,
};
