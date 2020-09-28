var express = require("express");
var router = express.Router();

const createTask = (db) => {
  return router.post("/tasks", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: createTask");
  });
};

module.exports = {
  createTask,
};