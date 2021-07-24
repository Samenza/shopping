import React from "react";

import { Button, Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "100%",
    backgroundImage: "url(/images/login/12.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  inputsContainer: {
    minHeight: "100vh",
    width: "30%",
    margin: "auto ",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": { margin: "0.5rem 0" },
    "& .MuiButton-contained": { width: "50%", margin: "1rem auto 0 auto" },
  },
  form: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
    width: "100%",
    height: "30vh",
  },
}));

const Login = () => {
  const classes = useStyles();
  const formSubmit = () => {
    alert("shod");
  };
  return (
    <div className={classes.background}>
      <Paper className={classes.inputsContainer}>
        <Box className={classes.logo}>
          <Link to="/">
            <img src="/images/login/comf.svg" alt="" />
          </Link>
          <Typography variant="h3">Login</Typography>
        </Box>

        <form className={classes.form} onSubmit={formSubmit} noValidate>
          <TextField
            id="standard-basic"
            label="UserName"
            color="secondary"
            variant="outlined"
            autoFocus
          />
          <TextField
            id="standard-basic"
            label="password"
            color="secondary"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="secondary">
            Sign In
          </Button>
        </form>
        <Button variant="outlined" color="">
          back to Home
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
