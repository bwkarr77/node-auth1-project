exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    { id: 1, username: "Steve", password: "1234" },
    { id: 2, username: "Kyle", password: "4321" },
    { id: 3, username: "Stan", password: "asdf" }
  ]);
};
