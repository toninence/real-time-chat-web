import React from 'react'
import './Input.css';


export default function Input(props) {
    const { message, setMessage, sendMessage } = props;
    return (
        <form>
            <input
                className='input'
                placeholder='Type a message'
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
        <button className='sendButton' onClick={event => sendMessage(event)}>Send</button>
        </form>
    )
}
