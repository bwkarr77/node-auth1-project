const router = require("express").Router();
console.log("routers.jsx");

const {
  getAll,
  createNew,
  getIndividual,
  deleteIndividual,
  updateIndividual
} = require("./controllers.jsx");

const { createUser, userLogin } = require("./userControllers.jsx");

const {
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
} = require("./recipeController.jsx");

router.route("/").get(getAll);

router.route("/register").post(createUser);

router.route("/login").post(userLogin);

router
  .route("/recipes/:id")
  .get(getIndividual)
  .delete(deleteIndividual)
  .put(updateIndividual);

module.exports = router;
