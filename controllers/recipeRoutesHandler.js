"use strict";

const axios = require("axios");
const recipeModel = require("../models/recipeModel");
const superagent = require("superagent");

async function getRecipeAPIHandler(req, res) {
  console.log(req.body);
  const QUEERY = await req.body.queery;

  // Looking at the body and sending api request acourding to the paremters defined by the request.
  const dietType = await req.body.diet;
  let dietArr = [];
  let diet = "";
  if (typeof dietType !== "undefined" && dietType !== "") {
    dietType.forEach((item) => {
      dietArr.push(`&diet=${item}`);
    });
  }
  diet = dietArr.join("");

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
  let recipeString = allRecipe.data.hits;
  // allRecipe.data.hits[0].recipe.label;
  let recipeObjList = [];
  recipeString.forEach((recipeModel) => {
    const recipeObj = new Recipe(recipeModel);
    return recipeObjList.push(recipeObj);
  });
  res.send(recipeObjList);
  // console.log(JSON.stringify(allRecipe.data));
}
class Recipe {
  constructor(data) {
    this.label = data.recipe.label;
    this.calories = data.recipe.calories;
    this.dietLabels = data.recipe.dietLabels;
    this.healthLabels = data.recipe.healthLabels;
    this.cuisineType = data.recipe.cuisineType;
    this.mealType = data.recipe.mealType;
    this.dishType = data.recipe.dishType;
    this.ingredientLines = data.recipe.ingredientLines;
    this.image = data.recipe.image;
    this.source = data.recipe.source;
    this.sourceURL = data.recipe.url;
  }
}

async function getFavRecipeHandler(req, res) {
  const userName = req.query.username;
  let allFavRecipe = await recipeModel.find({ userName: userName });
  res.send(allFavRecipe);
}

async function addFavRecipeHandler(req, res) {
  const {
    userName,
    label,
    calories,
    dietLabels,
    healthLabels,
    cuisineType,
    mealType,
    dishType,
    ingredientLines,
    image,
    source,
    sourceURL,
  } = req.body;
  let newRecipe = await recipeModel.create({
    userName: userName,
    recipeName: label,
    calories: calories,
    dietLabels: dietLabels,
    healthLabels: healthLabels,
    cuisineType: cuisineType,
    mealType: mealType,
    dishType: dishType,
    ingredientLines: ingredientLines,
    image: image,
    source: source,
    sourceURL: sourceURL,
  });
  res.send(newRecipe);
}

async function updateFavRecipeHandler(req, res) {
  console.log("updateFavRecipeHandler");

  const { id } = req.params;
  const {
    recipeName,
    calories,
    dietLabels,
    healthLabels,
    cuisineType,
    mealType,
    dishType,
    ingredientLines,
  } = req.body;
  await recipeModel.findByIdAndUpdate(id, {
    recipeName: req.body.recipeName,
    calories: req.body.calories,
    dietLabels: req.body.dietLabels,
    healthLabels: req.body.healthLabels,
    cuisineType: req.body.cuisineType,
    mealType: req.body.mealType,
    dishType: req.body.dishType,
    ingredientLines: req.body.ingredientLines,
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
