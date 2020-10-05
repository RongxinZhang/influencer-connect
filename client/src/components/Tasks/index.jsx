import React, { useState } from "react";
import CampaignList from "./CampaignList";
import MessageList from "./MessageList";
import CheckList from "./CheckList";
import classNames from "classnames"
import "./Tasks.scss";

export default function Tasks(props) {
  const [currentCampaign, setcurrentCampaign] = useState(null);
  // console.log("current campaign: ", currentCampaign);

  // all state is kept here.
  // Module: styled-componenets inside the componenet file.
  // Everything is kept inside component

  const handleClickCurrentCampaign = function (campaignId) {
    setcurrentCampaign(campaignId);
  };

  const campaignListItemClass = classNames(
    "campaign-list_item", {
      "campaign-list__item--selected": <p>Home</p>,
      "campaign-list__item--selected": <p>My Tasks</p>
    }
  )

  // const tasks = [...props.days]
  return (
    <main className="mainbox">
      <section className="sidebar">
        <li className="sidebar--left">
          <p>Home</p>
          <p>My Tasks</p>
          <p>Inbox</p>
          <p>Portfolios</p>
          <p>Goals</p>
        </li>
        <hr className="sidebar__separator sidebar--left" />
        <li className="sidebar--left">
          <p>Favourites</p>
          <p>Favourites projects by clicking the</p>
          <p>show more</p>
        </li>
        <hr className="sidebar__separator sidebar--left" />
        <li className="sidebar--left">
          <p>Reports</p>
        </li>
        <hr className="sidebar__separator sidebar--left" />
        <li className="sidebar--left">
          <p>Teams</p>
          <p>Create a Project</p>
          <p>+ Add Team</p>
        </li>
        <hr className="sidebar__separator sidebar--left" />
        <li className="sidebar--left">
          <p>Browse Other Teams</p>
        </li>
        <nav className="sidebar__menu">
          <CampaignList onClick={handleClickCurrentCampaign} />
        </nav>
      </section>


      <section className="middlebar">
        <hr className="sidebar__separator sidebar--centered" />
          
          {currentCampaign && 
            <CheckList currentCampaignId={currentCampaign} 
            />
          }
      </section>
      <section className="schedule">
      {currentCampaign && <MessageList campaignId={currentCampaign} />}
      </section>
    
    </main>
  );
}

{/* <main className="layout">
<section className="sidebar">
  <img
    className="sidebar--centered"
    src="images/logo.png"
    alt="Interview Scheduler"
  />
  <hr className="sidebar__separator sidebar--centered" />
  <nav className="sidebar__menu">
    <DayList
      days={days}
      day={dayDefault}
      setDay={setDay}
    />
  </nav>
  <img
    className="sidebar__lhl sidebar--centered"
    src="images/lhl.png"
    alt="Lighthouse Labs"
  />
</section>
<section className="schedule">
  {schedule}
  <Appointment key="last" time="5pm" />
</section>
</main>
);
} */}