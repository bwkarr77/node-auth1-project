// const controller = require("../utils/db-config.js");
const controller = require("../utils/db-config.js");
const { validAddition } = require("./middleWare.jsx");
console.log("userControllers");

const bcrypt = require("bcryptjs");
const Users = require("../utils/userDb-model.js");
//
//  KEEPING CONTROLLER METHODS GENERIC TO MAKE IT REUSABLE FOR ALL
//

// ================================
//            POST
// ================================
// @desc    POST/CREATE new car
// @route   POST to /api/recipes
exports.createUser = (req, res, next) => {
  console.log("userController.createUser");
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      res
        .status(201) //success
        .json(newUser);
    })
    .catch(err => {
      next(err);
    });
};

// ================================
//            POST
// ================================
// @desc    POST/CREATE new car
// @route   POST to /api/recipes
exports.userLogin = (req, res, next) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (!!user && !!bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res
          .status(200) //success
          .json({ message: `Login Successful, ${user.username}` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      next(err);
    });
};
