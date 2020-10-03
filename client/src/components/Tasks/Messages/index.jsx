import React, { useEffect, useState } from "react";
import { getCampaignMessages } from "../../../requests/campaigns";

export default function Messages(props) {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getCampaignsMessages().then((data) => {
      setMessage(() => {
        return data.data;
      });
    });
  }, []);

  const messageList = messages.map(message => {
    return (
      <Message
        name={message.name}
        content={tweet.content}
        date={tweet.date}
      />
    );
  });

  return <ul>{messageList}</ul>;
};