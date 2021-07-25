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
    "& img": {
      width: "100%",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "flex-end",
    height: "20vh",
    "& > *": {
      margin: "0 1rem ",
    },
    "& a": {
      textDecoration: "none",
      color: "#000000",
    },
  },
}));

const AuthForm = ({ page, input }) => {
  const classes = useStyles();
  const formSubmit = (e) => {
    e.preventDefault();
    alert("there are no backend,this is a preview");
  };
  return (
    <div className={classes.background}>
      <Paper className={classes.inputsContainer}>
        <Box className={classes.logo}>
          <Link to="/">
            <img src="/images/login/comf.svg" alt="" />
          </Link>
          <Typography variant="h3">{page}</Typography>
        </Box>

        <form className={classes.form} onSubmit={formSubmit} noValidate>
          {input.map((element) => {
            return (
              <TextField
                key={element}
                id={element}
                label={element}
                color="secondary"
                variant="outlined"
                autoFocus={input[0] === element ? true : false}
              />
            );
          })}
          <Button type="submit" variant="contained" color="secondary">
            {page}
          </Button>
        </form>
        <Box className={classes.buttons}>
          <Button variant="outlined">
            <Link to="/home"> back to Home</Link>
          </Button>
          {page === "Login" && (
            <Button variant="outlined">
              <Link to="/auth/signUp"> create account</Link>
            </Button>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default AuthForm;
