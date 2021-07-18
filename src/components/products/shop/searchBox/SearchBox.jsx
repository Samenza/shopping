import React from "react";
import {
  IconButton,
  InputBase,
  Paper,
  Container,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.2rem",
    marginTop: "1.5rem ",

    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));
const SearchBox = () => {
  const classes = useStyle();
  return (
    <Container>
      <Paper className={classes.paper}>
        <InputBase placeholder="Search" />
        <IconButton type="submit">
          <SearchIcon color="secondary" />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBox;
