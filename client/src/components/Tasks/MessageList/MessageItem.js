import React, { useState } from "react";
import "./MessageItem.scss";

const MessageItem = function (props) {
  console.log("this is MessageItem props: ", props);
  


  // function validate() {
  //   if (text === "") {
  //     setError("Message text cannot be blank");
  //     return;
  //   }
  
  //   setError("");
  //   props.onSave(text);
  // }

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