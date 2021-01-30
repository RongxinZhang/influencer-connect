import React, { useEffect, useState } from "react";
import { getCampaignsAllUsers } from "../../../requests/applications";
import ApplicationItem from "./Item";
// import CampaignFilter from "./CampaignFilter";

import "./List.scss";

export default function Tasks(props) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getCampaignsAllUsers().then((applicationsRes) => {
      setApplications(() => {
        return applicationsRes;
      });
      if (applicationsRes && applicationsRes[0]) {
        console.log("WOKRING", applicationsRes);
        props.onClick(applicationsRes[0]);
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleOnClick = function (application) {
    props.onClick(application);
  };

  const applicationList = applications.map((application) => {
    if (application) {
      return (
        <ApplicationItem
          onClick={handleOnClick}
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
