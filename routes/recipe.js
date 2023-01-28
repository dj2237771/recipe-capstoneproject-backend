"use strict";

const express = require("express");
const recipeRouter = express.Router();
const recipesHandler = require("../controllers/recipeRoutesHandler");

// GET: localhost:3001/recipeapi
recipeRouter.post("/recipeapi", recipesHandler.getRecipeAPIHandler);

// GET: localhost:3001/favrecipe
recipeRouter.get("/favrecipe", recipesHandler.getFavRecipeHandler);

// // post: localhost:3001/favrecipe
recipeRouter.post("/favrecipe", recipesHandler.addFavRecipeHandler);

// // put: localhost:3001/favrecipe/:id
recipeRouter.put("/favrecipe/:id", recipesHandler.updateFavRecipeHandler);

// // delete: localhost:3001/favrecipe/:id
recipeRouter.delete("/favrecipe/:id", recipesHandler.deleteFavRecipeHandler);

module.exports = recipeRouter;
