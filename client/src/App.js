import React from "react";
import "./App.scss";

import Tasks from "./components/Tasks";
import UpdateTasks from "./components/UpdateTasks";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CheckListItem from "./components/Tasks/checklists/CheckListItem";

function App() {
  return (
    <Router>
      {/* HEADER */}
      <Route exact path="/tasks/update">
        <UpdateTasks />
      </Route>
      <Route path="/tasks">
        <Tasks />
        <CheckListItem/>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* FOOTER */}
    </Router>
  );
}

export default App;
