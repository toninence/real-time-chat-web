import {
  Card,
  CardActions,
  CardContent,
  Grid,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputJoin from "../../atoms/Inputs/InputJoin";
import ButtonJoin from "../../atoms/Buttons/ButtonJoin";

const StyledGrid = withStyles({
  root: {
    marginBottom: "10px",
    width: "100%",
  },
})(Grid);

export default function JoinForm() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <React.Fragment>
      <Card style={{ width: "100%" }}>
        <CardContent>
          <StyledGrid
            item
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1>Unirse</h1>
          </StyledGrid>
          <Grid container spacing={2}>
            <StyledGrid item xs={6}>
              <InputJoin
                id="name"
                label="nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </StyledGrid>
            <StyledGrid item xs={6}>
              <InputJoin
                id="room"
                label="Sala"
                value={room}
                onChange={(event) => setRoom(event.target.value)}
              />
            </StyledGrid>
          </Grid>
          <StyledGrid item>
            <InputJoin
              id="avatar"
              label="avatar (ingrese una url)"
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
            />
          </StyledGrid>
        </CardContent>
        <CardActions>
          <StyledGrid item>
            <Link
              onClick={(ev) => (!name || !room ? ev.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}&avatar=${avatar}`}
            >
              <ButtonJoin />
            </Link>
          </StyledGrid>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
