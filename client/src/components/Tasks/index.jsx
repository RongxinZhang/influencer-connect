import React, { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
// import Header from "../Header";
// import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const [currentCampaign, setcurrentCampaign] = useState(null);

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(campaignId);
  };

  return (
    <section id="campaign-tasks">
      <CampaignList onClick={handleClickCurrentCampaign} />
      {currentCampaign && (
        <CheckList currentCampaignId={currentCampaign} user={props.user} />
      )}
      {currentCampaign && (
        <MessageList campaignId={currentCampaign} user={props.user} />
      )}
    </section>
  );
}
