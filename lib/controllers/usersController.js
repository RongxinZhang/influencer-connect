const checkUser = function (db, userObj) {
  const queryString1 = `SELECT email FROM users WHERE email =$1;`;

  return db.query(queryString1, [userObj.email]).then((data) => {
    if (data.rowCount > 0) {
      return true;
    }
    return false;
  });
};

/**
 *  Register a user
 * @param {object} db
 * @param {object} userObj
 */
const register = function (db, userObj) {
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

/**
 * Influencers
 */
const checkInfluencerProfile = function (db, userObj) {
  const queryString1 = `SELECT id FROM influencers WHERE user_id = $1;`;

  return db
    .query(queryString1, [userObj.userId])
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

const createInfluencerProfile = function (db, profileObj) {
  const queryString = `
  INSERT INTO influencers
  (first_name, last_name, user_id, description, profile_url, street, 
    city, province, country, instagram_url, youtube_url, facebook_url)
  VALUES 
  ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *;`;

  const inputValue = [
    profileObj.userType,
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

const checkBrandProfile = function (db, userObj) {
  const queryString1 = `SELECT id FROM brands WHERE user_id = $1;`;

  return db
    .query(queryString1, [userObj.userId])
    .then((data) => {
      console.log("HERE", data);
      if (data.rowCount > 0) {
        return true;
      }
      return false;
    })
    .catch((err) => {
      console.log("HNEW", err);
      return false;
    });
};

const createBrandProfile = function (db, profileObj) {
  const queryString = `
  INSERT INTO brands
  (first_name, last_name, user_id, description, profile_url, street, 
    city, province, country, instagram_url, youtube_url, facebook_url)
  VALUES 
  ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *;`;

  const inputValue = [
    profileObj.userType,
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

module.exports = {
  checkUser,
  register,
  checkInfluencerProfile,
  createInfluencerProfile,
  checkBrandProfile,
  createBrandProfile,
};
