import React from "react";
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Paper,
  makeStyles,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyle = makeStyles((theme) => ({
  paper: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.2rem",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  container: {
    height: "40vh",
    margin: "auto",
    backgroundColor: "#fbc7c3",
  },
}));

const Contact = () => {
  const classes = useStyle();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      className={classes.container}
    >
      <Typography variant="h4">
        Join our newsletter and receive Offers.
      </Typography>

      <Paper className={classes.paper}>
        <InputBase placeholder="Email" />
        <IconButton type="submit">
          <MailOutlineIcon color="secondary" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Contact;
