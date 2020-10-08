import React, { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
// import Header from "../Header";
// import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const [currentCampaignId, setcurrentCampaignId] = useState(null);

  const handleClickCurrentCampaignId = function (campaignId) {
    setcurrentCampaignId(campaignId);
  };

  return (
    <section id="campaign-tasks">
      <CampaignList
        currentCampaignId={currentCampaignId}
        onClick={handleClickCurrentCampaignId}
      />
      {currentCampaignId && (
        <CheckList currentCampaignId={currentCampaignId} user={props.user} />
      )}
      {currentCampaignId && (
        <MessageList campaignId={currentCampaignId} user={props.user} />
      )}
    </section>
  );
}
