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
      .then(user => {
        //Should be a true value, but won't return true :(
        let boolRet = bcrypt.compareSync(password, user.password);
        //
        console.log("authRequiredMiddle.then: ", password, user, boolRet);
        //
        if (user && boolRet) {
          console.log("authRequiredMiddleware Success!!!");
          next();
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(err => {
        res.status(500).json({ Errmessage: `${err}` });
      });
  }
};
