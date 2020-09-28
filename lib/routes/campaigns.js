var express = require("express");
var router = express.Router();

/* Get All Users */
router.get("/users", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: getAllUsers");
});

/* Delete Campaign Route */
router.delete("/:campaignId/users/:userId", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: deleteCampaign");
});

/* Get All Campaign Tasks */
router.get("/:campaignId/tasks", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: getAllTasks");
});

/* Create Campaign Tasks */
router.post("/:campaignId/tasks", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: createTask");
});

/* Update Tasks Information */
router.post("/:campaignId/tasks/:taskId", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: updateStatusOfTask");
});

/* Get List of all Messages for a campaign */
router.get("/:campaignId/messages", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: getCampaignMessages");
});

/* Create Message */
router.post("/:campaignId/messages", (req, res) => {
  console.log("TEST");
  res.send("NOT IMPLEMENTED: createMessage");
});

module.exports = router;
