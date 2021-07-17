import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000000",
    paddingTop: "35vh",
  },
});
const ProductHeader = () => {
  const classes = useStyle();
  return (
    <Box className={classes.main}>
      <Typography variant="h4" color="primary">
        Home/shop
      </Typography>
      <Typography variant="h1">Shop</Typography>
    </Box>
  );
};

export default ProductHeader;
