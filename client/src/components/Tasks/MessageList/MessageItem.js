import React from "react";
import "./MessageItem.scss";

const MessageItem = function (props) {
  return (
    <li className="message-list-item" data-message-id={props.campaignId}>
      <div>{props.name}</div>
      <div>{props.content}</div>
      <div>{props.date}</div>
    </li>
  );
};
export default MessageItem;