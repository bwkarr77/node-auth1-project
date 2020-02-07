const db = require("./db-config.js");
const bcrypt = require("bcryptjs");

async function add(user) {
  console.log("userDB-model>add(user):", user);
  user.password = await bcrypt.hash(user.password, 14);
  const [id] = await db("users").insert(user);
  console.log(id);
  return findById(id);
}

function findById(id) {
  console.log("userDB-model>findById:", id);
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

module.exports = {
  add
};
