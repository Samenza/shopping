import React from "react";
import { Box, makeStyles, Divider } from "@material-ui/core";

import FilteringCategory from "./filteringCategory/FiltringCategory";
import FiltringColor from "./filtringColor/FiltringColor";
import FiltringPrice from "./filtringPrice/FiltringPrice";
const useStyle = makeStyles({
  filterBox: {
    width: "35vh",
    position: "sticky",
    top: "1rem",
    marginTop: "2rem",
    "& p": {
      padding: "3px",
      color: "#367599",
      cursor: "pointer",
      width: "fit-content",
      "&:hover": {
        color: "#cf7748",
      },
    },
  },
  divider: {
    margin: "20px 0 ",
  },
});

const Filtering = ({
  colorDispatch,
  categoryDispatch,
  setPriceFiltering,
  imgData,
}) => {
  const classes = useStyle();

  return (
    <Box className={classes.filterBox}>
      <FilteringCategory
        categoryDispatch={categoryDispatch}
        imgData={imgData}
      />
      <Divider className={classes.divider} />
      <FiltringColor colorDispatch={colorDispatch} imgData={imgData} />
      <Divider className={classes.divider} />
      <FiltringPrice imgData={imgData} setPriceFiltering={setPriceFiltering} />
    </Box>
  );
};

export default Filtering;
