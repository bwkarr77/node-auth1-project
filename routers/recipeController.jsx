const dbRecipe = require("../utils/db-config.js");
const { validAddition } = require("./middleWare.jsx");
console.log("recipeController");
const recipeScheme = require("../utils/db-model.js");
// ================================
//            GET, ALL
// ================================
// @desc    GET all recipes
// @route   GET to /api/recipes
exports.getShoppingList = (req, res, next) => {
  // const { limit, sortby, sortdir } = req.query;
  console.log("getShoppingList", req.params);
  recipeScheme
    .getShoppingList(req.params.id)
    .then(allReturns => {
      res
        .status(200) //success
        .json(allReturns);
    })
    .catch(e => {
      console.log("getAll error: ", e);
      res
        .status(500) //server error
        .json({ error: "error in getAllIndividual" });
    });
};

// ================================
//            GET, ALL
// ================================
// @desc    GET all instructions
// @route   GET to /api/instructions
exports.getInstructions = (req, res, next) => {
  // const { limit, sortby, sortdir } = req.query;
  console.log("getInstructions", req.params);
  recipeScheme
    .getInstructions(req.params.id)
    .then(allReturns => {
      console.log(allReturns[0].step);
      res
        .status(200) //success
        .json(allReturns);
    })
    .catch(e => {
      console.log("getAll error: ", e);
      res
        .status(500) //server error
        .json({ error: "error in getAllIndividual" });
    });
};

// ================================
//            GET, ALL
// ================================
// @desc    GET all instructions
// @route   GET to /api/instructions
exports.getRecipesByIngredient = (req, res, next) => {
  // const { limit, sortby, sortdir } = req.query;
  console.log("getRecipesByIngredient", req.params);
  recipeScheme
    .getRecipesByIngredient(req.params.id)
    .then(allReturns => {
      console.log(allReturns);
      res
        .status(200) //success
        .json(allReturns);
    })
    .catch(e => {
      console.log("getAll error: ", e);
      res
        .status(500) //server error
        .json({ error: "error in getAllIndividual" });
    });
};
