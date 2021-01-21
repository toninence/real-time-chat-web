import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import "./Input.css";
import { Send as SendIcon } from "@material-ui/icons";

export default function InputSendMessage(props) {
  const { message, setMessage, sendMessage } = props;
  return (
    <React.Fragment>
      <form>
          <Grid container>
            <Grid item xs={8} sm={9} md={10}>
              <TextField
                placeholder="Type a message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) =>
                  event.key === "Enter" ? sendMessage(event) : null
                }
                style={{width: '100%', paddingRight: '5px'}}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              <Button
                variant="text"
                color="primary"
                onClick={(event) => sendMessage(event)}
                style={{width: '100%'}}
              >
                Enviar <SendIcon />
              </Button>
            </Grid>
          </Grid>
      </form>
    </React.Fragment>
  );
}
