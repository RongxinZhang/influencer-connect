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
      setMessageData(data);
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

    createCampaignMessage(props.campaignId, newMessage).then(() => {
      newMessage.name = props.user.name;
      setMessageData([...messageData, newMessage]);
      setText("");
      setError("");
    });
  };

  // console.log("this is messageData: ", messageData);

  const messageList = messageData.map((message) => {
    console.log("map message: ", message);
    return (
      <MessageItem
        key={message.id}
        name={message.name}
        content={message.content}
        date={message.created_at}
      />
    );
  });

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
