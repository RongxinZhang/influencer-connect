import React from "react";
import classNames from "classnames/bind";

import "./CheckListItem.scss";

const CheckListItem = function (props) {
  const handleTaskComplete = function () {
    props.handleTaskUpdate(props.taskId, "completed");
  };

  const checklistItem = classNames("checkList-list-item", {
    "checkList-list-item--completed": props.status === "completed",
  });

  return (
    <li className={checklistItem} data-task-id={props.taskId}>
      <section>
        <div className="checkList-description">{props.description}</div>
        <div className="checkList-status">{props.status}</div>
        <div className="checkList-due-date">{props.daysLeft} days left</div>
      </section>

      <section className="checklist-buttons">
        <button
          className="checklist-complete-button"
          onClick={handleTaskComplete}
        >
          Complete
        </button>
      </section>
    </li>
  );
};

export default CheckListItem;
