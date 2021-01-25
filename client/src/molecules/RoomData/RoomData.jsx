import React, { useEffect } from "react";
import { FiberManualRecord as FiberManualRecordIcon } from "@material-ui/icons";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

export default function Connected({ roomData }) {
  const classes = useStyles();
  useEffect(() => {
    console.log(roomData.users);
  }, []);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Conectados</Typography>
        {roomData.users &&
          roomData.users.map((user) => (
            <>
              <List>
                <ListItem>
                  {/* <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/24/ac/8a/24ac8a6e4ea35dbc3fe07c97dc29120d.jpg"
                  /> */}
                  <ListItemText
                    alignItems="flex-start"
                    primary={user.name}
                    className={classes.ListItemText}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <FiberManualRecordIcon style={{ color: "green" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <Divider />
            </>
          ))}
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  ListItemText: {
    color: "red",
    fontSize: "small !important",
  },
});
