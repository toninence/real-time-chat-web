import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import JoinForm from "../../molecules/JoinForm/JoinForm";
// import './join.css'

const StyledContainer = withStyles({
  root: {
    background:
    "linear-gradient(180deg, rgba(0,0,0,1) 42%, rgba(88,94,98,1) 100%)",
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
        xs={12}
        sm={10}
        md={6}
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
