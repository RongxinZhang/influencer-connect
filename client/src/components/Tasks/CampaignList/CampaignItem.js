import React from "react";
import "./CampaignItem.scss";

const CampaignItem = function (props) {
  // console.log("this is CI.js props: ", props);
  return (
    <li
      className="campaign-list-item"
      onClick={() => props.onClick(props.campaignId)}
      data-campaign-id={props.campaignId}
    >
      <section
        className="campaign-list-picture"
        style={{
          backgroundImage: "url(" + props.profilePicture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section className="campaign-list-user">
        <div className="campaign-list-user-name">
          <span>{props.name}</span>
          <span>{props.followerCount}</span>
        </div>
        <div>{props.currentCampaign}</div>
        {/* <div>{props.currentTask}</div> */}
      </section>
    </li>
  );
};
export default CampaignItem;
