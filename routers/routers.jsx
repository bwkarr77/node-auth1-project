const router = require("express").Router();
console.log("routers.jsx");
const { restricted } = require("./middleWare.jsx");
const authorize = require("../auth/authRequiredMiddleware.jsx");

const bcrypt = require("bcryptjs");

const {
  createUser,
  userLogin,
  getAllUsers,
  logout
} = require("./userControllers.jsx");

router.route("/auth/register").post(createUser);

// router.route("/auth/login").post(userLogin, authorize());
router.post("/auth/login", authorize, (req, res) => {
  console.log("testing....");
  let { username } = req.headers;
  res.status(200).json({ message: "Success" });
});

router.route("/users").get(getAllUsers);

router.route("/logout").get(logout, restricted());

module.exports = router;
