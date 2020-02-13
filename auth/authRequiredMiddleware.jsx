//from instruction

const users = require("../utils/userDb-model.js");
const bcrypt = require("bcryptjs");

module.exports = (req, res, next) => {
  const { username, password } = req.headers;
  console.log("authRequiredMiddleware:", username, password);
  // validate that they exist ... we didn't have this part in class...
  if (!(username && password)) {
    res.status(401).json({ message: "invalid Inputs" });
  } else {
    users
      .findByCredentials({ username })
      .first()
      .then(_user => {
        console.log("authRequiredMiddle.then: ", password, _user);
        if (_user && bcrypt.compareSync(password, _user.password)) {
          next();
        } else {
          res.status(401).json({ messege: "Invalid Credentials" });
        }
      })
      .catch(err => {
        res.status(500).json({ messege: err });
      });
  }
};
