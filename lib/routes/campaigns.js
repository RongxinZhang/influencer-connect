var express = require("express");
var router = express.Router();

/* Get All Users */ 
router.get("/users", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: getAllUsers");
  });

/* Delete Campaign Route */ 
router.post("/:campaign_id/users/:user_id", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: deleteCampaign");
  });

/* Get All Campaign Tasks */
router.get("/:campaign_id/tasks", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: getAllTasks");
  });

/* Create Campaign Tasks */
router.post("/:id/tasks", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: createTask");
  });

/* Update Tasks Information */
router.post("/:id/tasks/:taskId", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: updateStatusOfTask");
  });

/* Get List of all Messages for a campaign */
router.get(":id/messages", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: getCampaignMessages");
  });

/* Create Message */
router.post(":id/messages", (req, res) => {
    console.log("TEST");
    res.send("NOT IMPLEMENTED: createMessage");
  });

module.exports = router;