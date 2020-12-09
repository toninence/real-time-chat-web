var express = require('express');
const http = require('http');
const socketio = require('socket.io')

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
    socket.on('disonnect', () => {
        console.log('user has left');
    })
})
app.use(router);


server.listen(PORT, () => console.log(`Server listen at port ${PORT}`))