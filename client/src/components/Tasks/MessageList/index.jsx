import React, { useEffect, useState } from "react";
import {
  getCampaignMessages,
  createCampaignMessage,
  // getCampaignsAllUsers,
} from "../../../requests/campaigns";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

export default function Messages(props) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    getCampaignMessages(props.campaignId).then((data) => {
      setMessageData(() => data);
    });
  }, [props.campaignId]);

  //Send Button Function
  const send = function () {
    if (text === "") {
      setError("Text cannot be blank");
      return;
    }

    const newMessage = {
      senderId: props.user.userId,
      date: Date.now(),
      content: text,
    };

    createCampaignMessage(props.campaignId, newMessage).then((data) => {
      const createdMessage = {
        ...data[0],
        senderId: newMessage.senderId,
        name: props.user.name,
      };
      setMessageData([...messageData, createdMessage]);
      setText("");
      setError("");
    });
  };

  // console.log("this is messageData: ", messageData);

  let messageList = [];

  if (messageData.length > 0) {
    messageList = messageData.map((el) => {
      return (
        <MessageItem
          key={el.id}
          name={el.name}
          isSender={el.senderId === props.user.userId}
          content={el.content}
          date={el.created_at}
        />
      );
    });
  }

  return (
    <div id="message_list_container">
      <h3>Messages:</h3>
      <section id="message-list">
        <ul>{messageList}</ul>
      </section>

      <div className="message_list_input">
        <section>
          <textarea
            type="text"
            placeholder="Enter Text Here"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
        </section>

        <section className="message-buttons">
          <button className="message-send-button" onClick={send}>
            Send
          </button>
        </section>
        <section>{error}</section>
      </div>
    </div>
  );
}
