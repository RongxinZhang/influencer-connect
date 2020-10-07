import React, { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
// import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  // const [name, setName] = useState("");
  const [currentCampaign, setcurrentCampaign] = useState(null);
  // const [user, setUser] = useState();

  // all state is kept here.
  // Module: styled-componenets inside the componenet file.
  // Everything is kept inside component

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(campaignId);
  };

  // const tasks = [...props.days]
  // if (user) {
  return (
    <section id="campaign-tasks">
      <CampaignList onClick={handleClickCurrentCampaign} />
      {currentCampaign && <CheckList currentCampaignId={currentCampaign} />}
      {currentCampaign && (
        <MessageList campaignId={currentCampaign} user={props.user} />
      )}
    </section>
  );
  // } else {
  //   return (
  //     <div>
  //       <h1>Whos There ?</h1>
  //       <form onSubmit={login}>
  //         <label>Username</label>
  //         <input name="username" />
  //         <input type="submit" />
  //       </form>
  //     </div>
  //   );
  // }
}
