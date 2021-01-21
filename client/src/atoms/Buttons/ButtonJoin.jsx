import { Button, withStyles } from "@material-ui/core";
import React from "react";

const CustomButton = withStyles({
    root: {
      width: '100%',
    },
  })(Button);

export default function ButtonJoin() {
  return (
    <React.Fragment>
      <CustomButton
        variant="contained"
        color="default"
        type="submit"
        disableElevation
      >
        Iniciar Chat
      </CustomButton>
    </React.Fragment>
  );
}
