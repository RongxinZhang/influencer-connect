import React, { useState } from "react";
import "./MessageItem.scss";

const MessageItem = function (props) {
  console.log("this is messageitem: ", props);
  return (
    <main>
      <li className="message-list-item" data-message-id={props.campaignId}>
        <div className="message_list_item_header">
          <div>{props.name}</div>
          <div>{props.content}</div>
          <div className="message_list_item_date">{Date(Date.now(props.date))}</div>
          </div>
      </li>
    </main>
  );
};
export default MessageItem;
