import React from "react";
import ApplicationItem from "./Item";
// import CampaignFilter from "./CampaignFilter";

import "./List.scss";

export default function Tasks(props) {
  const applicationList = props.applications.map((application) => {
    if (application) {
      return (
        <ApplicationItem
          onClick={props.onClick}
          selected={props.currentApplication.id === application.id}
          key={application.id}
          application={application}
        />
      );
    }
    return {};
  });

  return (
    <section id="campaign-list">
      <div>{props.listingName}</div>
      {/* <CampaignFilter /> */}
      <ul>{applicationList}</ul>
    </section>
  );
}
