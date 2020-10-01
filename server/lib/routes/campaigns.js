const express = require("express");
const campaignsController = require("../controllers/campaignsController");
const router = express.Router();
const campaignController = require("../controllers/campaignsController");

/* Get all users for all campaigns */
router.get("/allUsers", (req, res) => {
  // NOTE: This should be replaced with the req.user object from the request
  const userObj = { userId: 2 };

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
        throw new Error("User already deleted");
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
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Create Campaign Tasks */
router.post("/:campaignId/tasks", (req, res) => {
  const campaignId = Number(req.params.campaignId);

  const taskObj = {
    ...req.body,
    campaignId,
  };

  campaignController
    .createTask(taskObj)
    .then((data) => {
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Update Tasks Information */
router.post("/:campaignId/tasks/:taskId", (req, res) => {
  const taskId = Number(req.params.taskId);

  const taskObj = {
    ...req.body,
    taskId,
  };
  campaignController
    .updateTask(taskObj)
    .then((data) => {
      console.log(data);
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Delete Campaign Tasks */
router.delete("/:campaignId/tasks/:taskId", (req, res) => {
  const taskId = Number(req.params.taskId);

  const taskObj = { taskId };

  campaignController
    .deleteTask(taskObj)
    .then((data) => {
      if (data.rowCount > 0) {
        res.json({ success: 200, data: data.rows });
      } else {
        throw new Error("Task already deleted");
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Get List of all Messages for a campaign */
router.get("/:campaignId/messages", (req, res) => {
  const campaignId = Number(req.params.campaignId);

  console.log("TEST");
  const messagesObj = { campaignId };

  campaignController
    .getCampaignMessages(messagesObj)
    .then((data) => {
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

/* Create Message */
router.post("/:campaignId/messages", (req, res) => {
  const campaignId = Number(req.params.campaignId);

  const messageObj = {
    ...req.body,
    campaignId,
  };

  campaignsController
    .createCampaignMessage(messageObj)
    .then((data) => {
      res.json({ success: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, error: err.message });
    });
});

module.exports = router;
