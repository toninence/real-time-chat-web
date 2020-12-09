import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

export default function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        console.log(socket);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room });

    }, [ENDPOINT, location.search])
    return (
        <div>
            Chat
        </div>
    )
}
