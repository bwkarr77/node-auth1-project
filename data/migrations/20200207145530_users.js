exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    console.log("migration>users.js:", users);
    users.increments();
    users
      .string("username", 200)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
