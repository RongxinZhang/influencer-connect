const { Pool } = require("pg");

// Development PG connection
let connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

if (process.env.NODE_ENV === "production") {
  connectionConfig = { connectionString: process.env.DATABASE_URL || "" };
}

const pool = new Pool(connectionConfig);

pool
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

/**
 * structure based on: https://node-postgres.com/guides/project-structure
 */

const query = async function (queryString, params) {
  const start = Date.now();
  const res = await pool.query(queryString, params);
  const duration = Date.now() - start;
  console.log("executed query", {
    queryString,
    duration,
    rows: res.rowCount,
  });
  return res;
};

const getClient = async function () {
  const client = await pool.connect();
  const query = client.query;
  const release = client.release;
  // set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    console.error("A client has been checked out for more than 5 seconds!");
    console.error(
      `The last executed query on this client was: ${client.lastQuery}`
    );
  }, 5000);
  // monkey patch the query method to keep track of the last query executed
  client.query = (...args) => {
    client.lastQuery = args;
    return query.apply(client, args);
  };
  client.release = () => {
    // clear our timeout
    clearTimeout(timeout);
    // set the methods back to their old un-monkey-patched version
    client.query = query;
    client.release = release;
    return release.apply(client);
  };
  return client;
};

module.exports = {
  query,
  getClient,
};
