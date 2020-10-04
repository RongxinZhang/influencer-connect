import React from "react";
import "./App.css";

import Tasks from "./components/Tasks";
import UpdateTasks from "./components/UpdateTasks";
import Login from "./components/Login";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* HEADER */}
      <Route exact path="/tasks/update">
        <UpdateTasks />
      </Route>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      {/* FOOTER */}
    </Router>
  );
}

export default App;
