import React from "react";

import { makeStyles, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyle = makeStyles({
  contain: {
    position: "relative",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1818",
    height: "6vh",
    color: "#FFFFFF",
  },
});
const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <CopyrightIcon fontSize="small" />

      <Typography variant="body1">
        2021 ComfySlot All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
