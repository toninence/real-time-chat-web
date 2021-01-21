import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ReactEmoji from "react-emoji";

const CurrentUserGrid = withStyles({
  root: {
    backgroundColor: "#9d9de894",
    margin: "2px 0 2px 0",
    width: '80%',
    height: 'auto',
    wordWrap: 'break-word',
    borderRadius: '10px 10px 0 10px',
    padding: '10px',
    float: 'right'
  },
})(Grid);

const AnotherUserGrid = withStyles({
  root: {
    backgroundColor: "#79398287",
    margin: "2px 0 2px 0",
    width: '80%',
    height: 'auto',
    wordWrap: 'break-word',
    borderRadius: '10px 10px 10px 0',
    padding: '10px'
  },
})(Grid);
export default function Message(props) {
  const {
    message: { user, text },
    name,
  } = props;
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <CurrentUserGrid container>
           <Grid item xs={2}>
            <Typography >{trimmedName}</Typography>
          </Grid>
          <Grid item xs={8}>
              <Typography>{ReactEmoji.emojify(text)}</Typography>
          </Grid> 
          
    </CurrentUserGrid>
  ) : (
    <AnotherUserGrid container>
      <Grid item xs={8}>
        <Typography>{ReactEmoji.emojify(text)}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{user}</Typography>
      </Grid>
    </AnotherUserGrid>
  );
}
