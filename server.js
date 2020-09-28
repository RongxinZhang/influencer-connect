const ENV = require('./lib/environment');
const db = require("./lib/db");

const express = require("express");
const app = express();

const cors = require('cors');

//Separate Routes for each Resource
const campaignsRoutes = require("./lib/routes/campaigns");
// const campaignUsersRoutes = require("./lib/routes/campaignUsers");
const campaignTasks = require("./lib/routes/campaignTasks");
const createTask = require("./lib/routes/createTask");
const updateStatusOfTask = require("./lib/routes/updateStatusOfTask");
const campaignMessages = require("./lib/routes/campaignMessages");
const createMessage = require("./lib/routes/createMessage");
const deleteCampaign = require("./lib/routes/deleteCampaign");


const port = process.env.PORT || 3000;

app.use(cors());
// Replaces body parser
app.use(express.json());


//Mounting all resource routes
app.use("/campaigns", campaigns)
app.use("/campaigns", campaignsRoutes.getAllUsers(db));
// app.use("/campaigns", campaignUsersRoutes.getAllUsers(db));
app.use("/campaignTasks", campaignTasks.getAllTasks(db));
app.use("/createTask", createTask.createTask(db));
app.use("/updateStatusOfTask", updateStatusOfTask.updateStatusOfTask(db));
app.use("/campaignMessages", campaignMessages.getCampaignMessages(db));
app.use("/createMessage", createMessage.createMessage(db));
app.use("/deleteCampaign", deleteCampaign.deleteCampaign(db));



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});