import React, { useState } from "react";
import "./MessageItem.scss";

const MessageItem = function (props) {
  return (
    <main>
      <li className="message-list-item" data-message-id={props.campaignId}>
        <section className="message">
          <div>{props.name}</div>
          <div>{props.content}</div>
          <div>{props.date}</div>
        </section>
      </li>
    </main>
  );
};
export default MessageItem;
