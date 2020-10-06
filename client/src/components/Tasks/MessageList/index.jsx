import Axios from "axios";
import React, { useEffect, useState } from "react";
import { getCampaignMessages, getCampaignsAllUsers } from "../../../requests/campaigns";
import MessageItem from "./MessageItem";


import "./MessageList.scss";

export default function Messages(props) {

  console.log("this is campaign id: ", props.campaignId);


  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [messageData, setMessageData] = useState([]);
  // const [sample, setSample] = useState([]);

  useEffect(() => {
    getCampaignMessages(props.campaignId).then((data) => {
      console.log("this is data: ", data);
      const campaignMessages = data.filter((message) => message.campaign_id === props.campaignId);
      console.log("this is campaignMessages: ", campaignMessages);
      setMessageData(campaignMessages);
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
      date: Date(Date.now()),
      content: text
    }
    
    //Do a post request to messages url localhost:3006/campaigns/:campaignId/messages
    //TO SAVE THE MESSAGES
    const url = `/campaigns/${props.campaignId}/messages`;
    const promise = Axios
    .post(url, newMessage)
    .then(() => {
      setMessageData([...messageData, newMessage]);
      setText("");
      setError("");
      })
    return promise;
  }


  console.log("this is messageData: ", messageData);

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
