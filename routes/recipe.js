"use strict";

const express = require("express");
const recipeRouter = express.Router();
const recipesHandler = require("../controllers/recipeRoutesHandler");

// GET: localhost:3001/recipeapi
recipeRouter.get("/recipeapi", recipesHandler.getRecipeAPIHandler);

// GET: localhost:3001/favrecipe
recipeRouter.get("/favrecipe", recipesHandler.getFavRecipeHandler);
