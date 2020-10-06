import React from "react";

const CheckListItem = function (props) {
  const handleTaskComplete = function () {
    props.handleTaskUpdate(props.taskId, "complete");
  };

  return (
    <div className="checklistItem-container">
      <input type="checkbox" id={props.taskId} />
      <li className="main-container1" >
        <div className="description">{props.description}</div>
        <div className="status">{props.status}</div>
        <div className="due-date">{props.daysLeft} days left</div>
    
        <section className="checklist-buttons">
          <button
            className="checklist-complete-button"
            onClick={handleTaskComplete}
          >
          Complete
          </button>
        </section>
      </li>
    </div>
  );
};

export default CheckListItem;
