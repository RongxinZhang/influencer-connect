const ENV = require("./lib/environment");

const express = require("express");
//Socket Io and http are for real time chat box
const socketio = require('socket.io');
const http = require("http");

const app = express();
// Also for chat box, might have to replace app with server on all .use and .listen
const server = http.createServer(app);
const io = socketio(server);

//SOCKET IO CODE 
io.on('connection', (socket) => {
  console.log("We have a new connection!");

  socket.on('disconnect', () => {
    console.log("User had left!");
  });

});

const cors = require("cors");

//Separate Routes for each Resource
const campaignsRoutes = require("./lib/routes/campaigns");
const usersRoutes = require("./lib/routes/users");

const port = process.env.PORT || 3000;

// Replaces body parser
app.use(cors());
app.use(express.json());
//Mounting all resource routes
app.use("/users", usersRoutes);
app.use("/campaigns", campaignsRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
