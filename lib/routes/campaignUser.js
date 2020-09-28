var express = require("express");
var router = express.Router();

const getAllUsers = (db) => {
  return router.get("/users", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: getAllUsers");
  });
};

module.exports = {
  getAllUsers,
};