import React, { useState } from "react";
import ApplicationList from "./ApplicationList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
import Header from "./Header/Header";
// import { getCampaignsAllUsers } from "../../requests/campaigns";

import "./Tasks.scss";

export default function Tasks(props) {
  const [currentApplication, setCurrentApplication] = useState({});
  const user = { id: 1, firstName: "rongxin", lastName: "bob" };

  const handleClickCurrentApplication = function (application) {
    setCurrentApplication(() => application);
  };

  return (
    <section id="campaign-tasks">
      <ApplicationList
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
