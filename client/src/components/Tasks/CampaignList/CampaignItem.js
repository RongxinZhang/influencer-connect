import React from "react";
import Moment from "react-moment";
import "./CampaignItem.scss";
import classNames from "classnames/bind";

const CampaignItem = function (props) {
  const campaignClass = classNames("campaign-list-item", {
    "campaign-list-item--selected": props.selected,
  });

  return (
    <li
      className={campaignClass}
      onClick={() => props.onClick(props.campaignId)}
      data-campaign-id={props.campaignId}
    >
      <section className="campaign-list-picture">
        <div
          style={{
            backgroundImage: "url(" + props.profilePicture + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <section className="campaign-list-user">
        <div className="campaign-list-user-name">
          {props.name}
          <span>{props.followerCount}</span>
        </div>
        <div className="campaign-list-campagin-name">
          <Moment fromNow>{props.appliedDate}</Moment>
        </div>
        {/* <div>{props.currentTask}</div> */}
      </section>
    </li>
  );
};
export default CampaignItem;
