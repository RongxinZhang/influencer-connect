const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersController");
const SALT_ROUNDS = 10;

router.post("/register", async (req, res) => {
  const passwordHash = bcryptjs.hashSync(req.body.password, SALT_ROUNDS);

  const userObj = {
    ...req.body,
    passwordHash,
  };

  const userExist = await usersController.checkUser(userObj);

  // console.log(userObj);

  if (userExist) {
    return res.send("UserExist");
  }
  // Create new user
  usersController
    .register(userObj)
    .then((data) => {
      if (data.rowCount < 1) {
        throw new Error("User not created");
      }
      res.json({ status: 200, data: data.rows });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

/**
 * LOGIN ROUTE
 */
router.post("/login", (req, res) => {
  usersController
    .getUser(req.body)
    .then((data) => {
      if (data.rowCount < 1) {
        throw new Error("User does not exist");
      }

      const password = req.body.password;
      const passwordHash = data[0].password;
      const ONE_DAY = 86400;

      if (bcryptjs.compareSync(password, passwordHash)) {
        var jwtToken = jwt.sign(
          { userId: data[0].id, userType: data[0].user_type },
          process.env.JWT_SECRET,
          {
            expiresIn: ONE_DAY * 30, // 30 days hours
          }
        );
        console.log("LOGGED IN");

        return res.json({
          status: 200,
          data: {
            userId: data[0].id,
            first_name: data[0].first_name,
            last_name: data[0].last_name,
            email: data[0].email,
            userType: data[0].user_type,
            jwtToken: jwtToken,
          },
        });
      } else {
        throw Error("Wrong password or username");
      }
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
    userId,
    ...req.body,
  };

  delete profileObj.userType;
  // console.log("USER TYPE", userType);
  if (userType === "influencer") {
    const profileExist = await usersController.checkInfluencerProfile(
      profileObj
    );

    if (profileExist) {
      return res.send("profileExist");
    }

    // This is passed to to the response
    // after use is updated
    let userProfileData = {};

    // 1. Create influencer profile
    usersController
      .createInfluencerProfile(profileObj)
      .then((data) => {
        userProfileData = data;

        if (data.rowCount > 0) {
          // 2. Update user profile
          return usersController.updateUser({
            userType: "influencer",
            id: userId,
          });
        } else {
          throw new Error("user profile not created");
        }
      })
      .then((data) => {
        if (data.rowCount > 0) {
          return res.send(userProfileData.rows[0]);
        } else {
          throw new Error("user not updated");
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err.message });
      });
  } else if (userType === "brand") {
    const profileExist = await usersController.checkBrandProfile(profileObj);

    if (profileExist) {
      return res.send("profileExist");
    }

    let responseData = {};

    // 1. Create brand profile
    usersController
      .createBrandProfile(profileObj)
      .then((data) => {
        // Create brand
        responseData.profile = data.rows;
        // 2. Create brand manager
        return usersController.createBrandManager({
          userId,
          brandId: data.rows[0].id,
          isAdmin: true,
        });
      })
      .then((data) => {
        if (data.rowCount > 0) {
          // 3. Updat user profile
          return usersController.updateUser({
            userType: "brand",
            id: userId,
          });
        } else {
          throw new Error("user profile not created");
        }
      })
      .then((data) => {
        if (data.rowCount > 0) {
          return res.send({ status: 200, data: responseData });
        } else {
          throw new Error("User not added to brand");
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  } else {
    return res.status(500).json({ error: "wrong user type" });
  }
});

// router.post("/login", (req, res) => {});

router.get("/:userId/profile", (req, res) => {});

module.exports = router;
