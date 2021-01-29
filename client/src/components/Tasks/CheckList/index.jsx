import React, { useEffect, useState } from "react";
import {
  getCampaignsTasks,
  updateCampaignTask,
} from "../../../requests/applications";
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

  const handleTaskUpdate = function (taskId, newStatus) {
    updateCampaignTask({
      campaignId: props.currentCampaignId,
      taskId: taskId,
      status: newStatus,
    }).then((res) => {
      if (res.length > 0) {
        // UPDATE: previous task with returned and updated task
        setTasks((prev) => {
          return prev.map((el) => {
            if (el.taskId === res[0].taskId) {
              return res[0];
            }
            return el;
          });
        });
      }
    });
  };

  const taskList = tasks.map((el) => {
    if (el.userType === props.user.userType) {
      return (
        <CheckListItem
          {...el}
          handleTaskUpdate={handleTaskUpdate}
          key={el.taskId}
        />
      );
    }
    return null;
  });

  return (
    <section id="checklist-list">
      <h3>You need to:</h3>
      <div className="check-list-container">
        <ul>{taskList}</ul>
      </div>
    </section>
  );
}
