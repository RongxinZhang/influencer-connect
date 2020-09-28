var express = require("express");
var router = express.Router();

const getAllTasks = (db) => {
  return router.get("/tasks", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: getAllTasks");
  });
};

module.exports = {
  getAllTasks,
};