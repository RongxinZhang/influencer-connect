import React, { useEffect, useState, useRef } from "react";
import {
  getApplicationMessages,
  createApplicationMessage,
  updateMessageReadReceipt,
} from "../../../requests/applications";
import MessageItem from "./MessageItem";
import "./MessageList.scss";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3006";

export default function Messages(props) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [messageData, setMessageData] = useState([]);

  const messagesEndRef = useRef(null);

  /**
   * Scroll of ref
   * @param {Boolean} animated
   */
  const scrollToBottom = (animated = true) => {
    if (animated) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      messagesEndRef.current.scrollIntoView();
    }
  };
  /**
   * Update socket room
   * Get all messages
   */
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connect", () => {
      // Leave old rooms
      socket.emit("leave-room", { applicationId: props.application.id });
      socket.off("new-message");
      // Join new room
      socket.emit("join-room", { applicationId: props.application.id });
      socket.on("new-message", (data) => {
        // Append message to state
        setMessageData((prevState) => [
          ...prevState,
          {
            id: data.public_id,
            content: data.content,
            status: data.status,
            senderId: data.sender_id,
            name: `${data.sender.firstName} ${data.sender.lastName}`,
            createdAt: data.createdAt,
          },
        ]);

        setText("");
        setError("");
        scrollToBottom();
        // Read message
        updateMessageReadReceipt(props.application.id, data.public_id);
      });
    });

    // Get latest messages
    getApplicationMessages(props.application.id).then((data) => {
      setMessageData(() => data);
      scrollToBottom(false);
    });

    // Disconnect when component "unmounts"
    return () => socket.disconnect();
  }, [props.application]);

  //Send Button Function
  const send = function () {
    if (text === "") {
      setError("Message can't be empty");
      return;
    }

    const newMessage = { content: text };

    createApplicationMessage(props.application.id, newMessage).then((data) => {
      if (!data) console.log("message did not save");
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
