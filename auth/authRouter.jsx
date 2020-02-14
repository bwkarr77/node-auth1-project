//from instruction

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const authorize = require("./authRequiredMiddleware.jsx");

const Users = require("../utils/userDb-model.js");

//REGISTER
router.post("/register", (req, res) => {
  let user = req.body;
  // const hash = bcrypt.hashSync(user.password, 8);
  // console.log("new user:", hash);
  // user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//LOGIN
router.post("/login", authorize, (req, res) => {
  console.log("login running...");
  let { username } = req.headers;
  res.status(200).json({ message: `Welcome ${username}!` });
});

module.exports = router;
