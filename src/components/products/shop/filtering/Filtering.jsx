import React from "react";
import {
  Box,
  makeStyles,
  Divider,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";

import FilteringCategory from "./filteringCategory/FiltringCategory";
import FiltringColor from "./filtringColor/FiltringColor";
import FiltringPrice from "./filtringPrice/FiltringPrice";

//this theme is for active items in filtering
const theme = createTheme({
  palette: {
    primary: {
      main: "#1983b4",
    },
    secondary: { main: "#cf7748" },
  },
});
const useStyle = makeStyles((theme) => ({
  filterBox: {
    position: "sticky",
    width: "35vh",
    top: "1rem",
    margin: "10rem 0 ",

    "& p": {
      padding: "3px",
      cursor: "pointer",
      width: "fit-content",
      "&:hover": {
        color: "#cf7748",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "fitContent",
      position: "unset",
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#ffe2d1da",
      boxShadow: "0 0px 1px 1px #bebebe",
      margin: "0 50px",
    },
  },
  divider: {
    margin: "20px 0 ",
  },
}));

const Filtering = ({
  colorDispatch,
  categoryDispatch,
  setPriceFiltering,
  imgData,
}) => {
  const classes = useStyle();

  return (
    //this div is for sticky position
    <ThemeProvider theme={theme}>
      <div>
        <Box className={classes.filterBox}>
          <FilteringCategory
            categoryDispatch={categoryDispatch}
            imgData={imgData}
          />
          <Divider className={classes.divider} />
          <FiltringColor colorDispatch={colorDispatch} imgData={imgData} />
          <Divider className={classes.divider} />
          <FiltringPrice
            imgData={imgData}
            setPriceFiltering={setPriceFiltering}
          />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Filtering;
