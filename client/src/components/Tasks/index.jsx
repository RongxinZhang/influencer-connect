import React, { useState } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
import Header from "../Header";
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
      <div className="header_container">
        <Header user={props.user} />
        <div className="checklist_message_container">
          {currentCampaignId && (
            <CheckList
              currentCampaignId={currentCampaignId}
              user={props.user}
            />
          )}
          {currentCampaignId && (
            <MessageList campaignId={currentCampaignId} user={props.user} />
          )}
        </div>
      </div>
    </section>
  );
}
