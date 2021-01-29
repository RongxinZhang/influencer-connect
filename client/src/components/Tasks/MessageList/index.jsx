import React, { useEffect, useState, useRef } from "react";
import {
  getApplicationMessages,
  createApplicationMessage,
  // getCampaignsAllUsers,
} from "../../../requests/applications";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

export default function Messages(props) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [messageData, setMessageData] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = (animated = true) => {
    if (animated) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      messagesEndRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    getApplicationMessages(props.application.id).then((data) => {
      setMessageData(() => data);
      scrollToBottom(false);
    });
  }, [props.application]);

  //Send Button Function
  const send = function () {
    if (text === "") {
      setError("Message can't be empty");
      return;
    }

    const newMessage = { content: text };

    createApplicationMessage(props.application.id, newMessage).then((data) => {
      setMessageData((prevState) => [...prevState, data[0]]);
      setText("");
      setError("");
      scrollToBottom();
    });
  };

  // Build message list
  let messageList = [];
  if (messageData.length > 0) {
    messageList = messageData.map((el) => {
      return (
        <MessageItem
          id={el.id}
          key={el.id}
          name={el.name}
          isSender={el.senderId === props.user.userId}
          content={el.content}
          createdAt={el.createdAt}
        />
      );
    });
  }

  return (
    <div id="message_list_container">
      {/* <h3>Messages:</h3> */}
      <section id="message-list">
        <ul>{messageList}</ul>
        <div ref={messagesEndRef}></div> {/* Scroll ref */}
      </section>
      <div className="message_list_input">
        <section>
          <textarea
            type="text"
            placeholder="Check up on your creator :)"
            rows={3}
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="message-input"
          ></textarea>
          <button className="message-send-button" onClick={send}>
            Send
          </button>
        </section>

        {/* <section className="message-buttons">
        </section> */}
        <section className="message-error">{error}</section>
      </div>
    </div>
  );
}
