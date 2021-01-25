import { Grid, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ReactEmoji from "react-emoji";

const CurrentUserGrid = withStyles({
  root: {
    margin: "2px 0 2px 0",
    width: "80%",
    float: "right",
  },
})(Grid);
const CurrentMessageGrid = withStyles({
  root: {
    backgroundColor: "#a4b7d6",
    height: "auto",
    wordWrap: "break-word",
    borderRadius: "10px 10px 0 10px",
    padding: "10px",
  },
})(Grid);

const AnotherUserGrid = withStyles({
  root: {
    margin: "2px 0 2px 0",
    width: "80%",
  },
})(Grid);
const AnotherUserMessageGrid = withStyles({
  root: {
    height: "auto",
    wordWrap: "break-word",
    borderRadius: "10px 10px 10px 0",
    padding: "10px",
    backgroundColor: "#f2eff0",
    marginRight: '5px'
  },
})(Grid);
const CustomNameTypography = withStyles({
  root: {
    color: '#a29393',
    fontSize: '0.8rem',
  }
})(Typography);
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
      <Grid item xs={2} justify='center'>
        <CustomNameTypography>{trimmedName}</CustomNameTypography>
      </Grid>
      <CurrentMessageGrid item xs={10}>
        <Typography>{ReactEmoji.emojify(text)}</Typography>
      </CurrentMessageGrid>
    </CurrentUserGrid>
  ) : (
    <AnotherUserGrid container>
      <AnotherUserMessageGrid item xs={8}>
        <Typography>{ReactEmoji.emojify(text)}</Typography>
      </AnotherUserMessageGrid>
      <Grid item xs={2}>
        <CustomNameTypography>{user}</CustomNameTypography>
      </Grid>
    </AnotherUserGrid>
  );
}
