import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "glamor";
import Message from "../../atoms/Message/Message";
// import { css } from 'emotion';
import './Messages.css';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

let ROOT_CSS = css({
  height: "90%",
  backgroundColor: '#e5e0df',
  padding: "10px",
  borderRadius: "5px",
});

export default function Messages(props) {
  const { messages, name } = props;

  return (
    <ScrollToBottom className={ROOT_CSS}>
      <TransitionGroup className="todo-list">
        {messages.map(( message, i ) => (
          <CSSTransition key={i} timeout={500} classNames="item">
            <div>
              <Message message={message} name={name} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ScrollToBottom>
  );
}
