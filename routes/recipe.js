"use strict";

const express = require("express");
const recipeRouter = express.Router();
const recipesHandler = require("../controllers/recipeRoutesHandler");

// GET: localhost:3001/recipeapi
recipeRouter.get("/recipeapi", recipesHandler.getRecipeAPIHandler);

// // GET: localhost:3001/favrecipe
// recipeRouter.get("/favrecipe", recipesHandler.getFavRecipeHandler);

// // post: localhost:3001/favrecipe
// recipeRouter.post("/favrecipe", digimonHandlers.addFavRecipeHandler);

// // put: localhost:3001/favrecipe/:id
// recipeRouter.put("/favrecipe/:id", digimonHandlers.updateFavRecipeHandler);

// // delete: localhost:3001/favrecipe/:id
// recipeRouter.delete("/favrecipe/:id", digimonHandlers.deleteFavRecipeHandler);

module.exports = recipeRouter;
