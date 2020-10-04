import React, { useEffect, useState } from "react";
import { getCampaignsTasks } from "../../../requests/campaigns";
import "./CheckList.scss";

export default function CheckList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("tasks", props.currentCampaignId);
    getCampaignsTasks(props.currentCampaignId).then((tasks) => {
      console.log("tasks", tasks);
      setTasks(() => {
        return tasks;
      });
    });
  }, [props.currentCampaignId]);

  const handleTaskUpdate = function (taskId, change) {
    console.log(taskId);
  };

  console.log(tasks);
  // const handleClick = function (input) {
  //   createCampaignTasks();
  // };

  // const tasks = [...props.days]
  return (
    <section id="checklist-list">
      <ul>"TEST</ul>
    </section>
  );
}
