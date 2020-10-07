import React, { useEffect, useState } from "react";
import "./App.scss";

import Tasks from "./components/Tasks";
// import UpdateTasks from "./components/UpdateTasks";
import Login from "./components/Login";
// import Chat from "./components/Chat/Chat";
// import Join from "./components/Join/Join";

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
      {/* <Route exact path="/tasks/update">
        <UpdateTasks />
      </Route> */}
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
