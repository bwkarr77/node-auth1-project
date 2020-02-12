$  yarn add knex
$ yarn add knex sqlite3
====> $ yarn knex init
$ yarn add express
$ yarn add bcrytpjs
$ yarn add knex-cleaner
$ yarn add server
////// edit the knexfile.js to include: seeds, migrations, etc.
====> edit package.json to include "scripts"
====> $ yarn knex seed:make 000-cleanup
====> \$ yarn knex migrate:make users

// edit the migrations file
// copy cleanup.js file
// create seed files


====================
yarn knex migrate:rollback
yarn knex migrate:latest
yarn knex seed:run
