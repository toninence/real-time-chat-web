import { Card, CardActions, CardContent, Grid, withStyles } from "@material-ui/core";
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

  return (
    <React.Fragment>
      <Card>
        <CardContent>

        <StyledGrid item style={{ display: "flex", justifyContent: "center" }}>
          <h1>Unirse</h1>
        </StyledGrid>
        <StyledGrid item>
          <InputJoin
            id="name"
            label="nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </StyledGrid>
        <StyledGrid item>
          <InputJoin
            id="room"
            label="Sala"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          />
        </StyledGrid>        
        </CardContent>
        <CardActions>
        <StyledGrid item>
          <Link
            onClick={(ev) => (!name || !room ? ev.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <ButtonJoin />
          </Link>
        </StyledGrid>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
