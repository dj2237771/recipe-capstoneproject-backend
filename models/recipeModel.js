"use strict";

const mongoose = require("./index");

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  calories: Number,
  dietLabels: [String],
  healthLabels: [String],
  cuisineType: [String],
  mealType: [String],
  dishType: [String],
  ingredientLines: [String],
  image: String,
  source: String,
  sourceURL: String,
});

const recipeModel = mongoose.model("recipe", recipeSchema);

function seedData() {
  const newRecipe = new recipeModel({
    recipeName: "Chicken Vesuvio",
    calories: 4228.043058200812,
    dietLabels: "Low-Carb",
    healthLabels: [
      "Mediterranean",
      "Dairy-Free",
      "Gluten-Free",
      "Wheat-Free",
      "Egg-Free",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Soy-Free",
      "Fish-Free",
      "Shellfish-Free",
      "Pork-Free",
      "Red-Meat-Free",
      "Crustacean-Free",
      "Celery-Free",
      "Mustard-Free",
      "Sesame-Free",
      "Lupine-Free",
      "Mollusk-Free",
      "Kosher",
    ],
    cuisineType: "italian",
    mealType: "lunch/dinner",
    dishType: "main course",
    ingredientLines: [
      "1/2 cup olive oil",
      "5 cloves garlic, peeled",
      "2 large russet potatoes, peeled and cut into chunks",
      "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
      "3/4 cup white wine",
      "3/4 cup chicken stock",
      "3 tablespoons chopped parsley",
      "1 tablespoon dried oregano",
      "Salt and pepper",
      "1 cup frozen peas, thawed",
    ],
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLWVhc3QtMSJHMEUCIGf%2BHn%2FIZEA4b09poIvJ2ZkkEYSX7ETuw56BTPLEmB%2FTAiEAwrIVsfbfWvlE1Abi1YV3Tm7T2jOdiuk11GaeRFzkvioq1QQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDKo%2FpJvaTLMiKruwgCqpBCsHpquCiEGw9XVLEN2K%2FXex%2BQCkJWfUltMQEQX1V0IME5oN99SxBIn%2BDU9s4EfBGL0YXwVkKO0yTRml%2F9NabmKh8mQuj8RWL88IIGiZnaH6VcJdTJaQSxMqzPlQ85sZ3ezJWdakjaJQHfIqJhoU17QJGhiQzM2H6v4Rh6ScJQqOc%2FiSqEfd9WLSlSaeI%2BxhNGjXKkpBWPhs%2FjVYfPNCMUkx3Z4qlm4GDxFbhbyeObrumv4qjZ6UDCH90FLyWEF47LfJT32nV7y9skiiwhU4L6Dw3V9i3kRvjBIRvW86%2FoSFjyWPYkaWwKQ1dbvoRKvU7l4dSFUR%2BaN4cQ7mwPWl1bhuESiH%2BAuNQ6yeGjyxWIOouB5zrc4JXzGgDvCemHtx7C6vYfSwK0GMlp%2BUTJDN9uE3OEUjGa1MQbzL8pNwZ5jFlkx%2FFUv1vQspZVhH3v%2FXyW4OO282ijNBi1PypINUjt0KscgALoojjEWJTwebEc63Bi9tOUt2uJaXz3fqvp4Ha98mWSlcbKYeBgT3tH0kAF2r%2FLYpxR5KNTLuUYMT%2BEQwHvTOEJQNJWVn%2BASkWtvLCf33dTHJ1OCW64crTwfKUDm7dldIrfunEElfS%2BeYknTyYUapkV%2Bxk7cz%2FTcj7J4zMza%2BPoIo6IxcRzin917NpQw4R6oOob3%2BrycUwUYdvVdq%2B4fCtxQX1%2Bb3KZhKHWmcHM2bv2XamCHg6hlsbwf0nTKOAKy3tBkvGtww%2BYC6ngY6qQERPhz%2BI5wunn4H2aySBlHQDRFfz6C3yP4%2B8fAmQIYnXewE8jjL51YxlbMqZ2KDWpHZSZBafIdxqeaF2dtZDBlCPbImUclvBJkVwJ2vhNv5Nkac9vs7moXWMNPMbfP28spDqhst906XBgjd%2FsSCywzH4C%2F1OCGEv8T9AUmJOyVHMTHD6WA3BJzfb5UvDBeQTHzTyj8RsnP9AblO6HGj%2BRnz6y1DmlemI5zB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230123T144016Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFNCO477EY%2F20230123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3254ec71b7077b87efa5e74065503f128a1e9676b1e28998d3c9d5b394e96488",
    source: "Serious Eats",
    sourceURL:
      "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
  });
  newRecipe.save();
}
// seedData();

module.exports = recipeModel;
