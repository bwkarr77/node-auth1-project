const express = require("express");
console.log("server.js...");

const apiRouter = require("../routers/routers.jsx");
const configureMiddleware = require("./configureMiddleware.js");

const server = express();

// configureMiddleware(server);

// server.use();

server.get("/", (req, res) => {
  res.json({ message: "API Working!!!!!\n" });
});

server.use(logger);
server.use(express.json());

server.use("/api", apiRouter);

function logger(req, res, next) {
  console.log(`${req.method} - ${req.url} - ${Date(Date.now())}`);
  next();
}

module.exports = server;
