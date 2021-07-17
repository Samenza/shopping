import React from "react";
import { Box, makeStyles, Divider } from "@material-ui/core";

import Category from "./filteringCategory/Category";
import FiltringColor from "./filtringColor/FiltringColor";

const useStyle = makeStyles({
  filterBox: {
    width: "35vh",
    position: "sticky",
    top: "1rem",
    marginTop: "5rem",
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
const Filtering = () => {
  const classes = useStyle();
  return (
    <Box className={classes.filterBox}>
      <Category />
      <Divider className={classes.divider} />
      <FiltringColor />
    </Box>
  );
};

export default Filtering;
