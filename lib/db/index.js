const pg = require("pg");

// Development PG connection
let connectionConfig = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
}

if (process.env.NODE_ENV === "production"){
  connectionConfig = { connectionString: process.env.DATABASE_URL || "" }
}

const client = new pg.Client(connectionConfig);

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
