import React, { Fragment, useEffect, useState } from "react";
import CampaignList from "./CampaignList";
import CheckList from "./CheckList";

export default function Tasks(props) {
  const [currentCampaign, setcurrentCampaign] = useState(0);

  // all state is kept here.
  // Module: styled-componenets inside the componenet file.
  // Everything is kept inside component

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(() => {
      return campaignId;
    });
  };

  // const tasks = [...props.days]
  return (
    <Fragment>
      <div>HEADER</div>
      <CampaignList handleClickCurrentCampaign />
      {/* <CheckList currentCampaign={currentCampaign} /> */}
      {/* <Chats campaigns={campaigns} /> */}
      {/* <div>HEADER</div> */}
    </Fragment>
  );
}
