import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../../atoms/Message/Message";

export default function Messages(props) {
  const { messages, name } = props;
  return (
    <ScrollToBottom className='messages'>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
