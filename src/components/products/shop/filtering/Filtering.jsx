import React from "react";
import { Box, makeStyles, Divider } from "@material-ui/core";

import FilteringCategory from "./filteringCategory/FiltringCategory";
import FiltringColor from "./filtringColor/FiltringColor";
import FiltringPrice from "./filtringPrice/FiltringPrice";
const useStyle = makeStyles((theme) => ({
  filterBox: {
    width: "35vh",
    position: "sticky",
    top: "1rem",
    marginTop: "10rem",
    "& p": {
      padding: "3px",
      color: "#367599",
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
  );
};

export default Filtering;
