import React, { useEffect, useState } from "react";
import { getCampaignsTasks } from "../../../requests/campaigns";
import CheckListItem from "./CheckListItem";
import "./CheckList.scss";

export default function CheckList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getCampaignsTasks(props.currentCampaignId).then((data) => {
      if (data) {
        setTasks(() => {
          return data;
        });
      }
    });
  }, [props.currentCampaignId]);

  const handleTaskUpdate = function (taskId, change) {
    console.log("OK", taskId, "NEW", change);
  };

  const taskList = tasks.map((el) => {
    return (
      <CheckListItem
        {...el}
        handleTaskUpdate={handleTaskUpdate}
        key={el.taskId}
      />
    );
  });

  return (
    <section id="checklist-list">
      <ul>{taskList}</ul>
    </section>
  );
}
