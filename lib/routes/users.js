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

    // Create new user
    usersController
      .register(db, userObj)
      .then((data) => {
        res.json({ userCreated: true });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Create user profile
  router.post("/:userId/profile", async (req, res) => {
    const userId = req.params.userId;
    const userType = "influencer";

    console.log("userId", userId);

    const profileObj = {
      ...req.body,
      userId,
    };

    if (userType === "influencer") {
      const profileExist = await usersController.checkInfluencerProfile(
        db,
        profileObj
      );
      console.log("Influencer Exist", profileExist);

      if (profileExist) {
        return res.send("profileExist");
      }

      usersController
        .createInfluencerProfile(db, profileObj)
        .then((data) => {
          return res.send(data.rows[0]);
        })
        .catch((err) => {
          console.log(err);
          return res.send(err);
        });
    } else {
      const profileExist = await usersController.checkBrandProfile(
        db,
        profileObj
      );
      console.log("brandExist", profileExist);

      if (profileExist) {
        return res.send("profileExist");
      }

      usersController
        .createBrandProfile(db, profileObj)
        .then((data) => {
          return res.send(data.rows[0]);
        })
        .catch((err) => {
          console.log(err);
          return res.send(err);
        });
    }
  });

  router.post("/login");

  router.get("/:userId/profile", (req, res) => {});

  return router;
};

module.exports = userRoutes;
