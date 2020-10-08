const db = require("../db");

const checkUser = function (userObj) {
  const queryString1 = `SELECT email FROM users WHERE email =$1;`;

  return db
    .query(queryString1, [userObj.email])
    .then((data) => {
      if (data.rowCount > 0) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      return err;
    });
};

const getUser = function (userObj) {
  const queryString1 = `SELECT * FROM users WHERE email =$1;`;
  return db
    .query(queryString1, [userObj.email])
    .then((data) => {
      console.log("OBJ", data);
      return data.rows;
    })
    .catch((err) => {
      return err;
    });
};

/**
 *  Register a user
 * @param {object} db
 * @param {object} userObj
 */
const register = function (userObj) {
  const queryString2 = `
  INSERT INTO users (first_name, last_name, email, phone, password) 
  VALUES($1, $2, $3, $4, $5)
    RETURNING *;`;

  const inputValue = [
    userObj.firstName,
    userObj.lastName,
    userObj.email,
    userObj.phone,
    userObj.passwordHash,
  ];

  return db.query(queryString2, inputValue);
};

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

/**
 *  Update a user
 * @param {object} db
 * @param {object} userObj
 */
const updateUser = function (userObj) {
  const querryString = `
    UPDATE users SET ${updateQueryBuilder(userObj, "id", ["id"])}
    RETURNING *;
    `;
  const columnVals = Object.keys(userObj).map((key) => userObj[key]);
  return db.query(querryString, columnVals);
};

/**
 * Influencers
 */
const checkInfluencerProfile = async function (profileObj) {
  console.log(typeof profileObj.userId, profileObj.userId);
  const queryString1 = `SELECT id FROM influencers WHERE user_id = $1;`;

  try {
    const data = await db.query(queryString1, [profileObj.userId]);
    if (data.rowCount > 0) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const createInfluencerProfile = function (profileObj) {
  console.log(profileObj);
  const queryString = `
  INSERT INTO influencers
  (first_name, last_name, user_id, description, profile_url, street, 
    city, province, country, instagram_url, youtube_url, facebook_url)
  VALUES 
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *;`;

  const inputValue = [
    profileObj.firstName,
    profileObj.lastName,
    profileObj.userId,
    profileObj.description,
    profileObj.profile_url,
    profileObj.street,
    profileObj.city,
    profileObj.province,
    profileObj.country,
    profileObj.instagramURL,
    profileObj.youtubeURL,
    profileObj.facebookURL,
  ];

  return db.query(queryString, inputValue);
};

/**
 * Brands
 */

const checkBrandProfile = function (profileObj) {
  const queryString1 = `SELECT name FROM brands WHERE name like $1;`;
  return db
    .query(queryString1, [`%${profileObj.name}%`])
    .then((data) => {
      if (data.rowCount > 0) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      return false;
    });
};

const createBrandProfile = function (profileObj) {
  const queryString = `
  INSERT INTO brands
  (name, description, logo_url, city, province, country, website_url, instagram_url, facebook_url, youtube_url )
  VALUES 
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;`;

  const inputValue = [
    profileObj.name,
    profileObj.description,
    profileObj.logo_url,
    profileObj.city,
    profileObj.province,
    profileObj.country,
    profileObj.websiteURL,
    profileObj.instagramURL,
    profileObj.youtubeURL,
    profileObj.facebookURL,
  ];

  return db.query(queryString, inputValue);
};

const getBrandManagers = function (profileObj) {
  const queryString = `
  SELECT * FROM brand_managers
  WHERE brandId = $1`;

  const inputValue = [profileObj.brandId];

  return db.query(queryString, inputValue);
};

const createBrandManager = function (profileObj) {
  const queryString = `
  INSERT INTO brand_managers
  (user_id, brand_id, is_admin)
  VALUES 
  ($1, $2, $3)
  RETURNING *;`;

  const inputValue = [
    profileObj.userId,
    profileObj.brandId,
    profileObj.isAdmin,
  ];

  return db.query(queryString, inputValue);
};

module.exports = {
  checkUser,
  getUser,
  updateUser,
  register,
  checkInfluencerProfile,
  createInfluencerProfile,
  checkBrandProfile,
  createBrandProfile,
  createBrandManager,
  getBrandManagers,
};
