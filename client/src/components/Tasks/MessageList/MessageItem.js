import React, { useState } from "react";
import "./MessageItem.scss";

const MessageItem = function (props) {
  return (
    <main>
      <li className="message-list-item" data-message-id={props.campaignId}>
        <div className="message_list_item_header">
          <div>{props.name || "balky"}</div>
          <div className="message_list_item_date">
            {props.date || "Sep 20, 2020"}
          </div>
        </div>
        <div>{props.content}</div>
      </li>
    </main>
  );
};
export default MessageItem;
