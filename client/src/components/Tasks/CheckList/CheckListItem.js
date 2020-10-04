import React from "react";
import "./CampaignItem.scss";

const CheckListItem = function (props) {
  // handle complete

  return (
    <li
      className="campaign-list-item"
      onClick={() => props.onClick(props.campaignId)}
      data-campaign-id={props.campaignId}
    >
      <section>
        <div className="checkList-description">{props.description}</div>
        <div className="checkList-due-date">{props.dueDate}</div>
      </section>
      <section className="checklist-buttons">
        <button
          className="checklist-complete-button"
          onClick={props.handleCompleteTask}
        >
          Complete
        </button>
      </section>
    </li>
  );
};
export default CheckListItem;
