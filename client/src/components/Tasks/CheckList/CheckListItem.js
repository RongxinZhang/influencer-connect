import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
        <div className="checkList-due-date">
          {props.status === "completed" ? (
            "COMPLETED"
          ) : (
            <div>
              {props.daysLeft} <span> days left</span>
            </div>
          )}
        </div>
      </section>
      {props.status === "completed" ? (
        <FontAwesomeIcon icon={faCheckCircle} />
      ) : (
        <button
          className="checklist-complete-button"
          onClick={handleTaskComplete}
        >
          Complete
        </button>
      )}
    </li>
  );
};

export default CheckListItem;
