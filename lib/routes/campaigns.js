const express = require("express");
const router = express.Router();
const campaignController = require("../controllers/campaignsController");

/* Get All Users */
router.get("/users", (req, res) => {
  const userObj = { userId: 2 };
  let resObj = {};

  campaignController
    .getAllUsers(userObj)
    .then((data) => {
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Delete Campaign Route */
router.delete("/:campaignId/users/:userId", (req, res) => {
  // IMPORTANT: convert to int
  const campaignId = Number(req.params.campaignId);
  const userId = Number(req.params.userId);

  const userObj = { campaignId, userId: userId };

  campaignController
    .deleteInfluencerCampaign(userObj)
    .then((data) => {
      if (data.rowCount > 0) {
        res.json({ success: 200, data: data.rows });
      } else {
        throw new Error("No rows deleted");
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Get All Campaign Tasks */
router.get("/:campaignId/tasks", (req, res) => {
  const campaignId = Number(req.params.campaignId);

  const taskObj = {
    ...req.body,
    campaignId,
  };

  campaignController
    .getTasks(taskObj)
    .then((data) => {
      console.log(data);
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Create Campaign Tasks */
router.post("/:campaignId/tasks", (req, res) => {
  const campaignId = Number(req.params.campaignId);

  console.log(req.body);
  const createTaskBody = req.body;

  const postTaskObj = {
    status: "not accepted",
  };
  res.json(postTaskObj);
});

/* Update Tasks Information */
router.post("/:campaignId/tasks/:nnot su", (req, res) => {
  const campaignId = req.params.campaignId;
  const taskId = req.params.taskId;

  const updateTaskBody = req.body;
  console.log(req.body);

  const updateTaskObj = {
    status: "Accepted",
  };
  res.json(updateTaskObj);
  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

/* Delete Campaign Tasks */
router.delete("/:campaignId/tasks/:taskId", (req, res) => {
  const campaignId = req.params.campaignId;
  const taskId = req.params.taskId;

  const deleteTaskObj = {
    success: true,
  };
  res.json(deleteTaskObj);

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
    content: "hey",
  };
  res.json(messagesObj);
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

  const userObject = {
    ...req.body,
  };

  const postMessageObj = {
    content: "hey",
  };
  res.json(postMessageObj);
  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.status(500).json({ error: err.message })
  // })
});

module.exports = router;
