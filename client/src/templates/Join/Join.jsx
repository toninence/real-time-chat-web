import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import JoinForm from "../../molecules/JoinForm/JoinForm";
// import './join.css'

const StyledContainer = withStyles({
  root: {
    background:
      "linear-gradient(180deg, rgba(82,55,117,1) 42%, rgba(88,94,98,1) 100%)",
    height: "100vh",
    maxWidth: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
})(Container);


export default function Join() {
  return (
    <StyledContainer>
      <Grid
        container
        xs={8}
        sm={5}
        md={5}
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
          <JoinForm />
      </Grid>
    </StyledContainer>
  );
}
