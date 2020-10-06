import React, { useImperativeHandle, useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const [name, setName] = useState("");
  const [currentCampaign, setcurrentCampaign] = useState(null);
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState();
  
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    getCampaignsAllUsers().then((campaigns) => {

      const messages = {};
      const tempUsers = {}

      const names = campaigns.map((person) => {
        console.log("this is person: ", person);
        messages[person.campaignId] = [];
        tempUsers[person.name] = person.campaignId;
      });
      tempUsers['bulky'] = 99;
      setMessages(messages);
      setUsers(tempUsers);
    });
  }, []);


  const login = function(event) {
    event.preventDefault();
    if (Object.keys(users).includes(event.target.elements.username.value)){
      console.log("user exisits")
      setUser({
        name: event.target.elements.username.value,
        id: users[event.target.elements.username.value]
      })
    } else {
      console.log("user doesn't exist")
    }
    console.log("Users: ",users);
    console.log("Username: ",event.target.elements.username.value);
  }

  const logout = function() {
    setUser(null);
  }




  // all state is kept here.
  // Module: styled-componenets inside the componenet file.
  // Everything is kept inside component

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(campaignId);
  };

  // const tasks = [...props.days]
  if (user) {
    return (
      <section id="campaign-tasks">
        <CampaignList onClick={handleClickCurrentCampaign} setName={setName}/>
        {currentCampaign && <CheckList currentCampaignId={currentCampaign} />}
        {currentCampaign && messages && <MessageList campaignId={currentCampaign} name={user.name} setMessages={setMessages} messages={messages} />}
        <button onClick={()=>logout()}>Logout</button>
      </section>
    );
  } else {
    return (
      <div>
        <h1>Whos There ?</h1>
        <form onSubmit={login}>
          <label>
            Username
          </label>
          <input name="username"/>
          <input type="submit" />
        </form>
      </div>
    )

  }
  
}
