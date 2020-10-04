import React, { useEffect, useState } from "react";
import { getCampaignMessages } from "../../../requests/campaigns";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

export default function Messages(props) {
  const [messages, setMessage] = useState([]);

  console.log(messages);

  useEffect(() => {
    getCampaignMessages(props.campaignId).then((data) => {
      setMessage(data);
    });
  }, [props.campaignId]);

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
    <section id="message-list">
      <ul>{messageList}</ul>
    </section>
  );
}
