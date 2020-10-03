import React, { Fragment, useEffect, useState } from "react";
import CampaignList from "./CampaignList";
import CheckList from "./CheckList";
import MessageList from "./MessageList"

export default function Tasks(props) {
  const [currentCampaign, setcurrentCampaign] = useState(null);
  console.log("current campaign: ", currentCampaign);

  // all state is kept here.
  // Module: styled-componenets inside the componenet file.
  // Everything is kept inside component

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(campaignId);
  };

  // const tasks = [...props.days]
  return (
    <Fragment>
      <div>HEADER</div>
      <CampaignList onClick={(id) => handleClickCurrentCampaign(id)} />
      {/* <CheckList currentCampaign={currentCampaign} /> */}
      {/* <Chats campaigns={campaigns} /> */}
      {/* <div>HEADER</div> */}
      {currentCampaign && 
      <MessageList 
      campaignId={currentCampaign}
      />
      }
    </Fragment>
  );
}
