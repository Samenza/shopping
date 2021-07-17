import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyle = makeStyles({
  dot: {
    cursor: "pointer",
  },
});

const FiltringColor = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Typography variant="h5">Color</Typography>
      <Typography variant="body1">All</Typography>
      <FiberManualRecordIcon
        className={classes.dot}
        style={{ color: "#0000ffaa" }}
      />
      <FiberManualRecordIcon
        className={classes.dot}
        style={{ color: "#ffffff" }}
      />
      <FiberManualRecordIcon className={classes.dot} style={{ color: "red" }} />
      <FiberManualRecordIcon
        className={classes.dot}
        style={{ color: "#a53c00" }}
      />
      <FiberManualRecordIcon
        className={classes.dot}
        style={{ color: "#ff7300" }}
      />
      <FiberManualRecordIcon
        className={classes.dot}
        style={{ color: "#b3b3b3" }}
      />
    </React.Fragment>
  );
};

export default FiltringColor;
