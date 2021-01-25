import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InputSendMessage from "../../molecules/Inputs/InputSendMessage";
import Messages from "../../molecules/Messages/Messages";
import {
  withStyles,
  Avatar,
  CardHeader,
  IconButton,
  Card,
  CardContent,
  Grid,
  Container,
  Button,
  Hidden,
} from "@material-ui/core";
import {
  Close as CloseIcon,
  FiberManualRecord as FiberManualRecordIcon,
} from "@material-ui/icons";
import RoomData from "../../molecules/RoomData/RoomData";

let socket;
const StyledGrid = withStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
  },
})(Grid);
const StyledContainer = withStyles({
  root: {
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 42%, rgba(88,94,98,1) 100%)",
    height: "100vh",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
})(Container);

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomData, setRoomData] = useState("");
  const ENDPOINT = "https://gfwebsocketchat.herokuapp.com/";
  // const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room, avatar } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    // console.log(socket);
    setName(name);
    setRoom(room);
    setAvatar(avatar)

    socket.emit("join", { name, room }, () => {});
    // return () => {
    //     socket.emit('disconnect');
    //     socket.off();
    // }
    console.log("se une a la sala de chat");
  }, [ENDPOINT, location.search]);

  // Recibo un mensaje desde el socket y lo agrego al state de mensajes

  useEffect(() => {
    socket.on("roomData", (data) => {
      setRoomData(data);
      console.log("Actualizado room data", data);
    });

    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    return () => {
      socket.off();
    };
  }, [messages, roomData]);

  // Funcion para traer los datos del room (Nombre y todos los usuarios activos)

  // Functions for sending messages
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <StyledContainer>
      <Grid
        container
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "100%", paddingTop: "10px" }}
        spacing={2}
      >
        <Hidden xsDown>
          <Grid item xs={3} style={{ height: "100%" }}>
            <RoomData roomData={roomData} />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={8} lg={6} style={{ height: "100%" }}>
          <Card xs={12} style={{ height: "80%" }}>
            <CardHeader
              avatar={<Avatar aria-label="" src={avatar}/>}
              action={
                <IconButton aria-label="">
                  <a href="/">
                    <CloseIcon />
                  </a>
                </IconButton>
              }
              title={
                <Button
                  variant="text"
                  color="primary"
                  endIcon={<FiberManualRecordIcon style={{ color: "green" }} />}
                >
                  {name}
                </Button>
              }
              subheader={`Sala ${room}`}
            />
            <CardContent style={{ height: "80%" }}>
              <StyledGrid item>
                <Messages messages={messages} name={name} />
                <InputSendMessage
                  message={message}
                  setMessage={setMessage}
                  sendMessage={sendMessage}
                />
              </StyledGrid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
