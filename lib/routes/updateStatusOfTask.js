var express = require("express");
var router = express.Router();

const updateStatusOfTask = (db) => {
  return router.post("/tasks", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: updateStatusOfTask");
  });
};

module.exports = {
  updateStatusOfTask,
};