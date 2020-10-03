import React from "react";
import "./CampaignItem.scss";

const CampaignItem = function (props) {
  return (
    <li className="campaign-list-item" data-campaign-id={props.campaignId}>
      <div
        className="profile-picture"
        style={{ backgroundImage: "url(" + props.profilePicture + ")" }}
      ></div>
      <div>{props.name}</div>
      <div>{props.followerCount}</div>
      <div>{props.campaignName}</div>
      <div>{props.currentTask}</div>
    </li>
  );
};
export default CampaignItem;