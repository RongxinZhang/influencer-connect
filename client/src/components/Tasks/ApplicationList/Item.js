import React from "react";
import Moment from "react-moment";
import "./Item.scss";
import classNames from "classnames/bind";

const CampaignItem = function (props) {
  const campaignClass = classNames("campaign-list-item", {
    "campaign-list-item--selected": props.selected,
  });

  return (
    <li
      className={campaignClass}
      onClick={() => props.onClick(props.application)}
      data-campaign-id={props.application.id}
    >
      <section className="campaign-list-picture">
        <div
          style={{
            backgroundImage: "url(" + props.application.profilePicture + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <section className="campaign-list-user">
        <div className="campaign-list-user-name">{props.application.name}</div>
        <div className="campaign-list-campagin-name">
          <Moment fromNow>{props.application.appliedDate}</Moment>
        </div>
      </section>
    </li>
  );
};
export default CampaignItem;
