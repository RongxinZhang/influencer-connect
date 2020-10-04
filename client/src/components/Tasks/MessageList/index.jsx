import React, { useEffect, useState } from "react";
import { getCampaignMessages } from "../../../requests/campaigns";
import MessageItem from "./MessageItem";

export default function Messages(props) {
  const [messages, setMessage] = useState([]);

  console.log(messages);

  useEffect(() => {
    getCampaignMessages(props.campaignId).then((data) => {
      setMessage(data);
    });
  }, []);

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

  return <ul>{messageList}</ul>;
};