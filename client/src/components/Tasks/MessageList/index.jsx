import React, { useEffect, useState } from "react";
import { getCampaignMessages, getCampaignsAllUsers } from "../../../requests/campaigns";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

export default function Messages({messages, setMessages, campaignId, name, date}) {

  const [text, setText] = useState("");
  const [error, setError] = useState("");
  // const [messages, setMessage] = useState([]);
  // const [sample, setSample] = useState([]);

  useEffect(() => {

    getCampaignMessages(campaignId).then((data) => {
      if (data) {
        const newMessage = {
          name: "unknown",
          date: date,
          content: text
        }
        console.log(messages[campaignId]);
        console.log("end")
        // setMessage(() => {
        //   console.log("this is data: ", data);
        //   return data;
        // });
      }
    });
    // setMessage(props.messages[props.campaignId]);
  }, [campaignId]);

  //Send Button Function
  const send = function () {
    if (text === "") {
      setError("Text cannot be blank");
      return;
    }
    const newMessage = {
      name: name,
      date: Date(Date.now()),
      content: text
    }
    let messageLog = messages;
    let currentCampaignMessages = messageLog[campaignId];
    currentCampaignMessages.push(newMessage);
    messageLog[campaignId] = currentCampaignMessages;
    console.log("this is messages: ", messages);
    setMessages(messageLog);

    console.log("HERE ", currentCampaignMessages)
    
    // const newMessages = [...messages, newMessage];
    // setMessage(newMessages);
    setText("");
    setError("");

    //Do a post request to messages url localhost:3006/campaigns/:campaignId/messages
      //TO SAVE THE MESSAGES
  }

  const messageList = messages[campaignId].map((message) => {
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
          <h3>Chat:</h3>
        </section>

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
