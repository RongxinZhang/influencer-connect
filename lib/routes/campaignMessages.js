var express = require("express");
var router = express.Router();

const getCampaignMessages = (db) => {
  return router.get("/users", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: getCampaignMessages");
  });
};

module.exports = {
  getCampaignMessages,
};