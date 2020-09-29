const express = require("express");
const router = express.Router();

const bcryptjs = require("bcryptjs");
const usersController = require("../controllers/usersController");
const SALT_ROUNDS = 10;

const userRoutes = (db) => {
  router.post("/register", async (req, res) => {
    const passwordHash = bcryptjs.hashSync(req.body.password, SALT_ROUNDS);

    const userObj = {
      ...req.body,
      passwordHash,
    };

    const userExist = await usersController.checkUser(db, userObj);

    if (userExist) {
      return res.send("UserExist");
    }

    usersController
      .register(db, userObj)
      .then((data) => {
        // Set Cookie Session
        // req.session["username"] = data.rows[0].username;
        res.json({ userCreated: true });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:userId/profile", (req, res) => {});
  router.get("/:userId/profile", (req, res) => {});

  router.post("/login");

  return router;
};

module.exports = userRoutes;
