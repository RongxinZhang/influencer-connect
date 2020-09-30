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
      resObj.status = 200;
      resObj.data = data.rows;

      res.json(resObj);
    })
    .catch((err) => {
      resObj.status = 500;
      resObj.error = err.message;

      res.status(500).json(resObj);
    });
});

/* Delete Campaign Route */
router.delete("/:campaignId/users/:userId", (req, res) => {
  const campaignId = req.params.campaignId;
  const userId = req.params.userId;

  console.log(`campaignId: ${campaignId}, userId: ${userId}`);
  let resObj = {};

  const userObj = { campaignId, userId };

  campaignController
    .deleteInfluencerCampaign(userObj)
    .then((data) => {
      console.log(data);
      if (data.rowCount > 0) {
        resObj.success = 200;
        resObj.data = data.rows;
        res.json(resObj);
      } else {
        throw new Error("No rows deleted");
      }
    })
    .catch((err) => {
      resObj.status = 500;
      resObj.error = err.message;
      res.status(500).json(resObj);
    });
});

/* Get All Campaign Tasks */
router.get("/:campaignId/tasks", (req, res) => {
  const campaignId = req.params.campaignId;

  const getTaskObj = {
    ...req.body,
    status: "on-going",
  };
  res.json(getTaskObj);

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
    status: "not accepted",
  };
  res.json(postTaskObj);

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
