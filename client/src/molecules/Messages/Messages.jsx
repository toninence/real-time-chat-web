import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "glamor";
import Message from "../../atoms/Message/Message";
// import { css } from 'emotion';

let ROOT_CSS = css({
  height: "90%",
  "-webkit-box-shadow": "inset 2px 2px 8px 9px rgba(235,235,235,0.75)",
  "-moz-box-shadow": "inset 2px 2px 8px 9px rgba(235,235,235,0.75)",
  "box-shadow": "inset 2px 2px 8px 9px rgba(235,235,235,0.75)",
  padding: '10px',
  'border-radius': '5px',
});

export default function Messages(props) {
  const { messages, name } = props;

  return (
    <ScrollToBottom className={ROOT_CSS}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
