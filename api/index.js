const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

var cors = require("cors");

const router = require("./router");

const PORT = process.env.PORT || 5000;

var app = express();
const server = http.createServer(app);

// Determino las opciones de configuracion del socket
const io = socketio(server, {
  cors: {
    origin: "https://goofy-feynman-a8dada.netlify.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
// Acepta el origen. para evitar problemas de cors
app.use(cors());

app.use(router);

// Cuando se abre una conexion lo que esta dentro de la funcion se ejecuta segun la peticion.
io.on("connect", (socket) => {
  // Al recibir el termino 'join' emitido por el frontend ejecuta la funcion
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    })
        
    socket.broadcast
      .to(user.room)
      .emit("roomData", { room: user.room, users: getUsersInRoom(user.room), });

    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to the room ${user.room}`,
    });
    
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined!` });
    
    socket.join(user.room);


    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", { user: user.name, text: message });
      
      callback();
    }
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left`,
      });
      console.log(`User ${user.name} has left`);
    }
  });
});


server.listen(PORT, () => console.log(`Server listen at port ${PORT}`));
