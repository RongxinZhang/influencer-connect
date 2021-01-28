import React, { useState } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
import Header from "../Header";
// import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const [currentCampaignId, setcurrentCampaignId] = useState(null);
  const user = { id: 1, firstName: "rongxin", lastName: "bob" };

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
        {/* styling only */}
        <Header user={user} handleLogout={props.handleLogout} />
        <div className="checklist_message_container">
          {/* styling only*/}
          {/* {currentCampaignId && (
            <CheckList currentCampaignId={currentCampaignId} user={user} />
          )} */}
          {currentCampaignId && (
            <MessageList campaignId={currentCampaignId} user={user} />
          )}
        </div>
      </div>
    </section>
  );
}
