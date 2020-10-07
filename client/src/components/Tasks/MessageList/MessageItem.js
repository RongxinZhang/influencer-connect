import React, { useState } from "react";
import Moment from "react-moment";
import "./MessageItem.scss";

const MessageItem = function (props) {
  return (
    <main>
      <li className="message-list-item" data-message-id={props.campaignId}>
        <div className="message_list_item_header">
          <div>{props.name}</div>
          <div className="message_list_item_date">
            <Moment format="MMM DD, YYYY">{Date(props.date)}</Moment>
          </div>
        </div>
        <div>{props.content}</div>
      </li>
    </main>
  );
};
export default MessageItem;
