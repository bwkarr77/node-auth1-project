const db = require("./db-config.js");
const bcrypt = require("bcryptjs");

function find() {
  return db("users").select("id", "username");
}

function findByCredentials(credentials) {
  console.log("findByCredentials: ", credentials);
  return db("users")
    .where(credentials)
    .select("id", "username", "password");
}

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
  add,
  findById,
  find,
  findByCredentials
};
