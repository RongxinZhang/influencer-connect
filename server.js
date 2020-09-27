const ENV = require('./lib/environment');
const db = require("./lib/db");

const text = 'SELECT * FROM users WHERE first_name=$1;'
const values = ['Balky']

db.query(text, values)
  .then(res => {
    console.log(res.rows)
  })
  .catch(err => console.error(err.stack))