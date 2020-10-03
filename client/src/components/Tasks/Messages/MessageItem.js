import React from "react";
// const classNames = require('classnames');

export default function MessageItem(props) {
  const messages = props.messages.map(message => {
    return (
      <Message
        name={message.name}
        content={tweet.content}
        date={tweet.date}
      />
    );
  });

  return messages;
};