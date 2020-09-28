var express = require("express");
var router = express.Router();

const createMessage = (db) => {
  return router.post("/tasks", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: createMessage");
  });
};

module.exports = {
  createMessage,
};