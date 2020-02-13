//from instruction

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = server => {
  //   server.use(logger);
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
};

// function logger(req, res, next) {
//   console.log(`${req.method} - ${req.url} - ${Date(Date.now())}`);
//   next();
// }
