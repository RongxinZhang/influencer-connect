import React, { useEffect, useState } from "react";
import ApplicationList from "./ApplicationList";
import MessageList from "./MessageList";
import { getCampaignsAllUsers } from "../../requests/applications";
import CheckList from "./CheckList";
import Header from "./Header/Header";
import { useParams, useHistory } from "react-router-dom";

// import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const { applicationUUID } = useParams();
  let history = useHistory();
  const user = { id: 1, firstName: "rongxin", lastName: "bob" };

  const [currentApplication, setCurrentApplication] = useState({});
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getCampaignsAllUsers().then((appRes) => {
      console.log("applications:", appRes);

      if (appRes && appRes[0]) {
        setApplications(() => appRes);

        // Default to application
        history.push(`${appRes[0].id}`);
        setCurrentApplication(() => appRes[0]);

        if (applicationUUID) {
          // Find application that matches application UUID
          const filteredApp = appRes.filter(
            (app) => app.id === Number(applicationUUID)
          );
          // Set application ID if found
          if (filteredApp.length > 0) {
            setCurrentApplication(() => filteredApp[0]);
          }
        }
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleClickCurrentApplication = function (application) {
    setCurrentApplication(() => application);
    // Update application URL
    history.push(`${application.id}`);
  };

  return (
    <section id="campaign-tasks">
      <ApplicationList
        applications={applications}
        currentApplication={currentApplication}
        onClick={handleClickCurrentApplication}
      />
      <div className="header_container">
        {/* styling only */}
        <Header application={currentApplication} />
        <div className="checklist_message_container">
          {/* styling only*/}
          {currentApplication && currentApplication.id && (
            <MessageList application={currentApplication} user={user} />
          )}
          {/* {currentApplication && currentApplication.id && (
            <Profile application={currentApplication} user={user} />
          )} */}
          {/* {currentApplication && currentApplication.id && (
            <CheckList currentCampaignId={currentApplication.id} user={user} />
          )} */}
        </div>
      </div>
    </section>
  );
}
