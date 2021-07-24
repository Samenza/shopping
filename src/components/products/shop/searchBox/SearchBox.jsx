import React, { useState } from "react";
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
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.2rem",
    margin: " 1.5rem auto",

    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));
const SearchBox = ({ imgData, setFilterd }) => {
  const [inputValue, setInputValue] = useState();

  const inputOnChangeHandle = (input) => {
    let finalData = [];
    let data = [...imgData];
    for (let product of data) {
      let words = product.name.split(" ");
      for (let word of words) {
        if (word.toUpperCase() === input.target.value.trim().toUpperCase()) {
          finalData.push(product);
        }
      }
    }
    if (input.target.value === "") {
      finalData = imgData;
    }
    setFilterd(finalData);
    setInputValue(input);
  };
  const classes = useStyle();
  return (
    <Container>
      <Paper className={classes.paper}>
        <InputBase
          placeholder="Search"
          fullWidth
          onChange={(e) => inputOnChangeHandle(e)}
        />
        <IconButton
          type="submit"
          onClick={() => inputOnChangeHandle(inputValue)}
        >
          <SearchIcon color="secondary" />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBox;
