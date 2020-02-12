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
// @desc    POST/CREATE new user
// @route   POST to /api/register
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
// @desc    login with credentials
// @route   POST to /api/login
exports.userLogin = (req, res, next) => {
  console.log("userControllers>userLogin:", req.body);
  const credentials = req.body;
  Users.findByCredentials(credentials.username)
    .first()
    .then(user => {
      console.log(
        user,
        bcrypt.compareSync(credentials.password, user.password)
      );
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
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

// ================================
//            GET
// ================================
// @desc    GET to obtain all users
// @route   GET to /api/users
exports.getAllUsers = (req, res, next) => {
  Users.find()
    .then(users => {
      res
        .status(200) //success
        .json(users);
    })
    .catch(err => {
      next(err);
    });
};
