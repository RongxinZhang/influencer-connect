import React, { useEffect, useState } from "react";
import { getCampaignMessages } from "../../../requests/campaigns";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

export default function Messages(props) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getCampaignMessages(props.currentCampaignId).then((data) => {
      if (data) {
        setMessage(() => {
          return data;
        });
      }
    });
  }, [props.campaignId]);

  //I THINK MIC WENT OFF ONE SECOND
  // Im going to leave call and be right back just unplugged mic

  const send = function () {
    if (text === "") {
      setError("Text cannot be blank");
      return;
    }
    const newMessage = {
      name: props.name,
      date: undefined,
      content: text,
    };
    const newMessages = [...messages, newMessage];
    setMessage(newMessages);
    setText("");
    setError("");
  };

  // let count = 0;
  // let messageList = new Array();
  // while (count < 20) {
  //   messageList.push(
  //     <MessageItem
  //       key={count}
  //       name="rongxin"
  //       content="Testing something very cool"
  //       date="Jan 2012"
  //     />
  //   );
  //   count++;
  // }
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
          <button className="message-send-button" onClick={() => send()}>
            Send
          </button>
        </section>
        <section>{error}</section>
      </div>
    </div>
  );
}
