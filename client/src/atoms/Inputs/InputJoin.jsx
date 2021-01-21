import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";

const CustomTextField = withStyles({
  root: {
    width: "100%",
  },
})(TextField);

export default function InputJoin({ id, label, value, onChange }) {
  return (
    <React.Fragment>
      <CustomTextField
        color="primary"
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
}
