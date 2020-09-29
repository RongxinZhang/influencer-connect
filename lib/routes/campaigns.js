var express = require("express");
const { user } = require("pg/lib/defaults");
var router = express.Router();

/* Get All Users */
router.get("/users", (req, res) => {
  res.send("NOT IMPLEMENTED: getAllUsers");
});

/* Delete Campaign Route */
router.delete("/:campaignId/users/:userId", (req, res) => {
  console.log(req.params);
  const campaignId = req.params.campaignId;
  const userId = req.params.userId;
  console.log(`campaignId: ${campaignId}, userId: ${userId}`);

  const deleteObj = {
    success: true,
    failure: false
  }

  .then((data) => {
    res.json({ deleteObj: true })
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })

  console.log("TEST");
  res.send("NOT IMPLEMENTED: deleteCampaign");
});

/* Get All Campaign Tasks */
router.get("/:campaignId/tasks", (req, res) => {
  const campaignId = req.params.campaignId;

  const getTaskObj = {
    status: "on-going"
  }

  .then((data) => {
    res.json({ getTaskObj: true })
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })

  console.log("TEST");
  res.send("NOT IMPLEMENTED: getAllTasks");
});

/* Create Campaign Tasks */
router.post("/:campaignId/tasks", (req, res) => {
  const campaignId = req.params.campaignId;

  console.log(req.body);
  const createTaskBody = req.body;

  const postTaskObj = {
    status: "not accepted"
  }

  .then((data) => {
    res.json({ postTaskObj: true })
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })

  console.log("TEST");
  res.send("NOT IMPLEMENTED: createTask");
});

/* Update Tasks Information */
router.post("/:campaignId/tasks/:taskId", (req, res) => {
  const campaignId = req.params.campaignId;
  const taskId = req.params.taskId;

  const updateTaskBody = req.body;
  console.log(req.body);

  const updateTaskObj = {
    status: "Accepted"
  }
  .then((data) => {
    res.json({ updateTaskObj: true })
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })

  console.log("TEST");
  res.send("NOT IMPLEMENTED: updateStatusOfTask");
});

/* Get List of all Messages for a campaign */
router.get("/:campaignId/messages", (req, res) => {
  const campaignId = req.params.campaignId;

  const messagesObj = {
    content: "hey"
  }
  .then((data) => {
    res.json({ messagesObj: true })
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })
  console.log("TEST");
  res.send("NOT IMPLEMENTED: getCampaignMessages");
});

/* Create Message */
router.post("/:campaignId/messages", (req, res) => {
  const campaignId = req.params.campaignId;

  const createMessageBody = req.body;
  
  const postMessageObj = {
    content: "hey"
  }
  .then((data) => {
    res.json({ taskObj: true })
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })
  console.log("TEST");
  res.send("NOT IMPLEMENTED: createMessage");
});

module.exports = router;
