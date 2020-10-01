const express = require("express");
const router = express.Router();

const bcryptjs = require("bcryptjs");
const usersController = require("../controllers/usersController");
const SALT_ROUNDS = 10;

router.post("/register", async (req, res) => {
  const passwordHash = bcryptjs.hashSync(req.body.password, SALT_ROUNDS);

  const userObj = {
    ...req.body,
    passwordHash,
  };

  const userExist = await usersController.checkUser(userObj);

  if (userExist) {
    return res.send("UserExist");
  }

  // Create new user
  usersController
    .register(userObj)
    .then((data) => {
      res.json({ status: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Create user profile
router.post("/:userId/profile", async (req, res) => {
  const userId = Number(req.params.userId);
  const userType = req.body.userType;

  const profileObj = {
    ...req.body,
    userId,
  };

  delete profileObj.userType;

  if (userType === "influencer") {
    const profileExist = await usersController.checkInfluencerProfile(
      profileObj
    );

    if (profileExist) {
      return res.send("profileExist");
    }

    usersController
      .createInfluencerProfile(profileObj)
      .then((data) => {
        return res.send(data.rows[0]);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err.message });
      });
  }

  if (userType === "brand") {
    const profileExist = await usersController.checkBrandProfile(profileObj);
    console.log("brandExist", profileExist);

    if (profileExist) {
      return res.send("profileExist");
    }

    // usersController
    //   .createBrandProfile(profileObj)
    //   .then((data) => {
    //     return res.send({ status: 200, data: data.rows });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return res.status(500).json({ error: err.message });
    //   });
  }

  return res.status(500).json({ error: "wrong user type" });
});

router.post("/login");

router.get("/:userId/profile", (req, res) => {});

module.exports = router;