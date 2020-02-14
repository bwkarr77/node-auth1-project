const server = require("./api/apiServer.js");

const PORT = process.env.PORT || 5678;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
