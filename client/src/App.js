import React, { useEffect, useState } from "react";
import "./App.scss";

import Tasks from "./components/Tasks";
// import UpdateTasks from "./components/UpdateTasks";
import Login from "./components/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(() => {
        return JSON.parse(storedUser);
      });
    }
  }, []);

  const updateUser = function (userObj) {
    setUser(() => {
      return userObj;
    });
  };

  return (
    <Router>
      <Route path="/tasks">
        <Tasks user={user} />
      </Route>
      <Route path="/login">
        <Login updateUser={updateUser} />
      </Route>
    </Router>
  );
}

export default App;
