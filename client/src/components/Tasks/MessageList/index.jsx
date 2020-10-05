import React, { useEffect, useState } from "react";
import { getCampaignMessages } from "../../../requests/campaigns";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

export default function Messages(props) {

  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getCampaignMessages(props.campaignId).then((data) => {
      if (data) {
        setMessage(() => {
          return data;
        });
      }
    });
  }, [props.campaignId]);

  //Send Button Function
  const send = function () {
    if (text === "") {
      setError("Text cannot be blank");
      return;
    }
    const newMessage = {
      name: props.name,
      date: undefined,
      content: text
    }
    const newMessages = [...messages, newMessage]
    setMessage(newMessages);
    setText("");
    setError("");
  }

  const messageList = messages.map((message) => {
    return (
      <MessageItem
        key={message.id}
        name={message.name}
        content={message.content}
        date={message.date}
        />
        );
      });
      
      return (
        <div>
          <section id="message-list">
            <ul>{messageList}</ul>
          </section>

          <section>
            {error}
          </section>

          <section>
            <input
            type="text"
            placeholder="Enter Text Here"
            value={text}
            onChange={(event) => setText(event.target.value)}
            />
          </section>

        <section className="message-buttons">
            <button
            className="message-send-button"
            onClick={() => send()}
            >
            Send
          </button>
        </section>

        </div>
  );
}
