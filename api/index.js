const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

var cors = require('cors')

const router = require('./router');

const PORT = process.env.PORT || 5000;

var app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });;

app.use(cors())

io.on('connect', socket => {
    console.log('Helou moto');
    socket.on('join', ({name, room}, callback) => {
      const { error, user } = addUser({id: socket.id, name, room});
      
      if(error) return callback(error);
      
      socket.emit('message', { user: 'admin', text: `${user.name} welcome to the room ${user.room}`})
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});
      socket.join(user.room);

      callback();

    });

    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      io.to(user.room).emit('message', {user: user.name, text: message});
      console.log(user.name, message);
      callback();
    })
    socket.on('disonnect', () => {
        console.log('user has left');
    })
})
app.use(router);


server.listen(PORT, () => console.log(`Server listen at port ${PORT}`))