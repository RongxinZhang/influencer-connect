const checkUser = function (db, userObj) {
  const queryString1 = `SELECT email FROM users WHERE email =$1;`;

  return db.query(queryString1, [userObj.email]).then((data) => {
    if (data.rowCount > 0) {
      return true;
    }
    return false;
  });
};

const register = function (db, userObj) {
  const queryString2 = `INSERT INTO users (first_name, last_name, email, phone, password) VALUES($1, $2, $3, $4, $5)
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

module.exports = { checkUser, register };
