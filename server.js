const ENV = require("./lib/environment");
const db = require("./lib/db");

const express = require("express");
const app = express();

const cors = require("cors");

//Separate Routes for each Resource
const campaignsRoutes = require("./lib/routes/campaigns");
const usersRoutes = require("./lib/routes/users");

const port = process.env.PORT || 3000;

app.use(cors());
// Replaces body parser
app.use(express.json());

db.query(getTasksSQL, getTasksSQLValues)
  .then(res => {
    console.log("getTasksSQL")
    console.log(res.rows)
  })
  .catch(err => console.error(err.stack))



//started here//////////////////////////////////////////////////////////////////////////////////////////////////

const deleteInfluencerCampaign = function(compaign_id, inflencers_id) {
  const querryString =
    (`
      DELETE FROM campaigns
      WHERE campaigns.id = $1 AND campaigns.influencer_id = $2;
    `)
    return pool.query(querryString, [compaign_id, inflencers_id])
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.deleteInfluencerCampaign = deleteInfluencerCampaign;


// delete Campaign by the brand rep

const deleteCampaign = function(compaign_id) {
  const querryString =
    (`
      DELETE FROM campaigns
      WHERE campaigns.id = $1;
    `)
    return pool.query(querryString, [compaign_id])
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.deleteCampaign = deleteCampaign;

// Update campaign details

const updateCampaignDetailsbyBrandName =  function() {
  const querryString =
  (`
  UPDATE campaign_details
    JOIN brands ON brand_id = brands.id
  SET name = $1, brand_id = $2, product_description = $3, product_value = $4, commission_amount = $5, images_url = $6, affiliate_website = $7, example_posts = $8, post_requirements = $9, category = $10, city = $11, country = $12, target_age_range = $13, target_genders = $14
  WHERE brands.id = $15;
  `)

  return pool.query(querryString)
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.updateCampaignDetailsbyBrandName = updateCampaignDetailsbyBrandName;

// Create Campaign details

const createCampaign =  function() {
  const querryString =
  (`
  INSERT INTO campaign_details (name, brand_id, product_description, product_value, commission_amount, images_url, affiliate_website, example_posts, post_requirements, category, city, country, target_age_range, target_genders)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING *;
  `)

  return pool.query(querryString)
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.createCampaign = createCampaign;

// Update Tasks

const updateTask =  function(status, start_date, description, id) {
    const querryString =
    (`
    UPDATE tasks
    SET status = $1, start_date = $2, description = $3
    WHERE tasks.id = $4;
    `)
  
    return pool.query(querryString, [status, start_date, description, id])
      .then (res => {
        return res.rows;
      })
      .catch(err => {
        console.log('Error:', err.stack)
      });
  };
exports.updateTask = updateTask;

// Delete Tasks
const deleteTask =  function(id) {
  const querryString =
  (`
  DELETE tasks
  WHERE tasks.id = $1;
  `)

  return pool.query(querryString, [id])
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.deleteTask = deleteTask;

// Create Tasks
const createTask =  function(campaign_id, user_type, status, description, start_date) {
  const querryString =
  (`
    INSERT INTO tasks (campaign_id, user_type, status, description, start_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `)

  return pool.query(querryString, [campaign_id, user_type, status, description, start_date])
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.createTask = createTask;


const getCampaignMessages = function(id) {
  let querryString =
  (`
    SELECT *
    FROM messages
    JOIN campaigns ON campaign_id = campaigns.id
    WHERE campaigns.id = $1
  `)

  return pool.query(querryString, [id])
    .then(res => {
      return res.rows;
    })
    .catch (err => {
      console.log('Error:', err.stack)
    });
};

exports.getCampaignMessages = getCampaignMessages;


const createCampaignMessage = function(content, sender_id, receiver_id, campaign_id, status, created_at) {
  let querryString =
  (`
    INSERT INTO messages (content, sender_id, receiver_id, campaign_id, status, created_at)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `)

  return pool.query(querryString, [content, sender_id, receiver_id, campaign_id, status, created_at])
    .then(res => {
      return res.rows;
    })
    .catch (err => {
      console.log('Error:', err.stack)
    });
};

exports.createCampaignMessage = createCampaignMessage;


const getUsers = function(email, password) {
  let querryString =
  (`
    SELECT *
    FROM users
    WHERE users.email = $1 AND users.password = $2;
  `)

  return pool.query(querryString, [email, password])
    .then(res => {
      return res.rows;
    })
    .catch (err => {
      console.log('Error:', err.stack)
    });
};

exports.getUsers = getUsers;


const getbrandManagersById = function(email, password) {
  let querryString =
  (`
    SELECT *
    FROM brand_managers
      JOIN users ON user_id = users.id
      JOIN brands ON brand_id = brands.id
    WHERE users.email = $1 AND users.password = $2
    ORDER BY brand_managers.id;
  `)

  return pool.query(querryString, [email, password])
    .then(res => {
      return res.rows;
    })
    .catch (err => {
      console.log('Error:', err.stack)
    });
};
exports.getbrandManagersById = getbrandManagersById;
//Mounting all resource routes
app.use("/users", usersRoutes(db));
app.use("/campaigns", campaignsRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
