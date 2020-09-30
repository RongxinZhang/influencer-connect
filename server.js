const ENV = require("./lib/environment");
const db = require("./lib/db");

const express = require("express");
const app = express();

const cors = require("cors");

//Separate Routes for each Resource
const campaignsRoutes = require("./lib/routes/campaigns");

const port = process.env.PORT || 3000;

app.use(cors());
// Replaces body parser
app.use(express.json());
//Mounting all resource routes
app.use("/campaigns", campaignsRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
