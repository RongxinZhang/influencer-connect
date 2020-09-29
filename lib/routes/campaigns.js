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
    success: true
  }
  res.json( deleteObj )

  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

/* Get All Campaign Tasks */
router.get("/:campaignId/tasks", (req, res) => {
  const campaignId = req.params.campaignId;

  const getTaskObj = {
    status: "on-going"
  }
  res.json( getTaskObj )

  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

/* Create Campaign Tasks */
router.post("/:campaignId/tasks", (req, res) => {
  const campaignId = req.params.campaignId;

  console.log(req.body);
  const createTaskBody = req.body;

  const postTaskObj = {
    status: "not accepted"
  }
  res.json( postTaskObj )

  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
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
  res.json( updateTaskObj )
  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

/* Get List of all Messages for a campaign */
router.get("/:campaignId/messages", (req, res) => {
  const campaignId = req.params.campaignId;

  const messagesObj = {
    content: "hey"
  }
  res.json( messagesObj )
  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

/* Create Message */
router.post("/:campaignId/messages", (req, res) => {
  const campaignId = req.params.campaignId;

  const createMessageBody = req.body;

  const postMessageObj = {
    content: "hey"
  }
  res.json( postMessageObj )
  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

module.exports = router;
