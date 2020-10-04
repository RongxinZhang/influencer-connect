import React from "react";

const CheckListItem = function (props) {
  const handleTaskComplete = function () {
    props.handleTaskUpdate({ taskId: props.taskId, status: "complete" });
  };

  return (
    <li className="campaign-list-item" data-task-id={props.taskId}>
      <section>
        <div className="checkList-description">{props.description}</div>
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
