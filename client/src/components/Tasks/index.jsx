import React, { useImperativeHandle, useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const [name, setName] = useState("");
  const [currentCampaign, setcurrentCampaign] = useState(null);
  const [user, setUser] = useState({
    id: 2, 
    name: "Cristy"
  });
  
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    getCampaignsAllUsers().then((campaigns) => {

      const messages = {};

      const names = campaigns.map((person) => {
        console.log("this is person: ", person);
        messages[person.campaignId] = [];
      });
      setMessages(messages);
    });
  }, []);

  // all state is kept here.
  // Module: styled-componenets inside the componenet file.
  // Everything is kept inside component

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(campaignId);
  };

  // const tasks = [...props.days]
  return (
    <section id="campaign-tasks">
      <CampaignList onClick={handleClickCurrentCampaign} setName={setName}/>
      {currentCampaign && <CheckList currentCampaignId={currentCampaign} />}
      {currentCampaign && messages && <MessageList campaignId={currentCampaign} name={user.name} setMessages={setMessages} messages={messages} />}
    </section>
  );
}
