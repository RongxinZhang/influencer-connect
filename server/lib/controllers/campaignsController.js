const db = require("../db");

const getCampaigns = function (userObj) {
  const getCampaignsSQL = `
  SELECT 
    campaign_details.*
  FROM influencers
    INNER JOIN campaigns ON influencers.id = campaigns.influencer_id
    INNER JOIN campaign_details ON campaign_details.id = campaigns.campaign_detail_id
    INNER JOIN brands ON brands.id = campaign_details.brand_id
    INNER JOIN brand_managers ON brand_managers.brand_id = brands.id
    INNER JOIN users ON users.id = brand_managers.user_id
  WHERE users.id=$1
  GROUP BY campaign_details.id;`;

  return db.query(getCampaignsSQL, [userObj.userId]);
};

const getAllUsers = function (userObj) {
  const getInfluencersSQL = `
  SELECT 
    influencers.*, 
    campaigns.id AS campaign_id, 
    campaign_details.name AS campaign_name
  FROM influencers
    INNER JOIN campaigns ON influencers.id = campaigns.influencer_id
    INNER JOIN campaign_details ON campaign_details.id = campaigns.campaign_detail_id
    INNER JOIN brands ON brands.id = campaign_details.brand_id
    INNER JOIN brand_managers ON brand_managers.brand_id = brands.id
    INNER JOIN users ON users.id = brand_managers.user_id
  WHERE users.id=$1`;

  return db.query(getInfluencersSQL, [userObj.userId]);
};

const getTasks = function (taskObj) {
  const getTasksSQL = `select tasks.* from tasks
  INNER JOIN campaigns ON campaigns.id = tasks.campaign_id
  WHERE campaigns.id = $1`;

  const getTasksSQLValues = [taskObj.campaignId];

  return db.query(getTasksSQL, getTasksSQLValues);
};

//started here//////////////////////////////////////////////////////////////////////////////////////////////////
// does not work
/**
 *
 * @param {Number} userObj.campaignId
 * @param {Number} userObj.userId
 */
const deleteInfluencerCampaign = function (userObj) {
  const querryString = `
      DELETE FROM campaigns
      WHERE campaigns.id = $1 AND campaigns.influencer_id = $2
      RETURNING *;
    `;

  return db.query(querryString, [userObj.campaignId, userObj.userId]);
};

// delete Campaign by the brand rep
const deleteCampaign = function (campaignId) {
  const querryString = `
      DELETE FROM campaigns
      WHERE campaigns.id = $1;
    `;
  return db.query(querryString, [campaignId]);
};

// Create Campaign details

const createCampaign = function (userObject) {
  const querryString = `
  INSERT INTO campaign_details (name, brand_id, product_description, product_value, commission_amount, images_url, affiliate_website, example_posts, post_requirements, category, city, country, target_age_range, target_genders)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING *;
  `;
  let values = [
    userObject.name,
    userObject.brandId,
    userObject.productDescription,
    userObject.productValue,
    userObject.commissionAmount,
    userObject.imagesUrl,
    userObject.affiliateWebsite,
    userObject.examplePosts,
    userObject.postRequirements,
    userObject.category,
    userObject.city,
    userObject.country,
    userObject.targetAgeRange,
    userObject.targetGenders,
  ];

  return db.query(querryString, values);
};

// Update Tasks Queyr builder

const camelToSnake = function (string) {
  return string
    .replace(/[\w]([A-Z])/g, function (m) {
      return m[0] + "_" + m[1];
    })
    .toLowerCase();
};

const updateQueryBuilder = function (obj, whereCondition, exclude) {
  let query = [];
  let index = 1;

  var set = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] && !exclude.includes(key)) {
      set.push(`${camelToSnake(key)} = $${index}`);
      index++;
    }
  }
  query.push(set.join(", "));

  query.push(`WHERE ${whereCondition} = $${index}`);
  return query.join(" ");
};

// Update Tasks
const updateTask = function (taskObj) {
  console.log(updateQueryBuilder(taskObj, "id", ["taskId"]));
  const querryString = `
    UPDATE tasks SET ${updateQueryBuilder(taskObj, "id", ["taskId"])}
    RETURNING *;
    `;
  const columnVals = Object.keys(taskObj).map((key) => taskObj[key]);
  console.log(columnVals);
  return db.query(querryString, columnVals);
};

// Delete Tasks
const deleteTask = function (taskObj) {
  const querryString = `
  DELETE FROM tasks
  WHERE tasks.id = $1
  RETURNING *;
  `;

  return db.query(querryString, [taskObj.taskId]);
};

// Create Tasks
const createTask = function (userObject) {
  const querryString = `
    INSERT INTO tasks (campaign_id, user_type, status, description, due_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  return db.query(querryString, [
    userObject.campaignId,
    userObject.userType,
    userObject.status,
    userObject.description,
    userObject.dueDate,
  ]);
};

const getCampaignMessages = function (messageObj) {
  let querryString = `
    SELECT *
    FROM messages
    WHERE messages.campaign_id = $1
  `;

  return db.query(querryString, [messageObj.campaignId]);
};

const createCampaignMessage = function (messageObj) {
  let querryString = `
    INSERT INTO messages (name, content, sender_id, receiver_id, campaign_id, status)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  return db.query(querryString, [
    messageObj.name,
    messageObj.content,
    messageObj.senderId,
    messageObj.receiverId,
    messageObj.campaignId,
    messageObj.status,
  ]);
};

const getUser = function (userObject) {
  let querryString = `
    SELECT *
    FROM users
    WHERE users.email = $1 AND users.password = $2;
  `;

  return db.query(querryString, [userObject.email, userObject.password]);
};

const register = function (userObject) {
  let querryString = `
    INSERT INTO users (first_name, last_name, email, password, phone)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  return db.query(querryString, [
    userObject.firstName,
    userObject.lastName,
    userObject.email,
    userObject.password,
    userObject.phone,
  ]);
};

const createInfluencerProfile = function (userObject) {
  let querryString = `
    INSERT INTO influencers (first_name, last_name, description, profile_url,  street, city, province, country, instagram_url, facebook_url, youtube_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `;
  let values = [
    userObject.firstName,
    userObject.lastName,
    userObject.description,
    userObject.profileUrl,
    userObject.street,
    userObject.city,
    userObject.province,
    userObject.country,
    userObject.instagramUrl,
    userObject.facebookUrl,
    userObject.youtubeUrl,
  ];

  return db.query(querryString, values);
};

const getbrandManagersById = function (userObject) {
  let querryString = `
    SELECT *
    FROM brand_managers
      JOIN users ON user_id = users.id
      JOIN brands ON brand_id = brands.id
    WHERE users.email = $1 AND users.password = $2
    ORDER BY brand_managers.id;
  `;

  return pool.query(querryString, [userObject.email, userObject.password]);
};

module.exports = {
  getAllUsers,
  deleteInfluencerCampaign,
  getCampaigns,
  deleteCampaign,
  createCampaign,
  getTasks,
  updateTask,
  deleteTask,
  createTask,
  getCampaignMessages,
  createCampaignMessage,
  getUser,
  getbrandManagersById,
  register,
  createInfluencerProfile,
};
