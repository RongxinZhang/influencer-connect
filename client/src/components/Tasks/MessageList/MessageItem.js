import React from "react";
import Moment from "react-moment";
import "./MessageItem.scss";
import classNames from "classnames/bind";

const MessageItem = function (props) {
  const messageClass = classNames("message_list_item", {
    "message_list_item--is-sender": props.isSender,
  });

  return (
    <main>
      <li className={messageClass} data-message-id={props.campaignId}>
        <div className="message_list_item_header">
          <div>{props.name}</div>
          <div className="message_list_item_date">
            <Moment format="MMM DD, YYYY">{props.date}</Moment>
          </div>
        </div>
        <div>{props.content}</div>
      </li>
    </main>
  );
};
export default MessageItem;
