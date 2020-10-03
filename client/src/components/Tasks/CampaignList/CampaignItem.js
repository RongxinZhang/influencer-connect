import React from "react";
import "./CampaignItem.scss";

const CampaignItem = function (props) {
  return (
    <li className="campaign-list-item" data-campaign-id={props.campaignId}>
      <section
        className="picture"
        style={{
          backgroundImage: "url(" + props.profilePicture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section className="user">
        <div className="user-name">
          <span className="">{props.name}</span>
          <span>{props.followerCount}</span>
        </div>
        <div>{props.currentCampaign}</div>
        {/* <div>{props.currentTask}</div> */}
      </section>
    </li>
  );
};
export default CampaignItem;
