import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyle = makeStyles((theme) => ({
  dot: {
    cursor: "pointer",
    "&:hover": {
      fontSize: "2rem",
    },
  },
  colors: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      width: "3rem",
    },
  },
}));

export const colorInit = (initial) => {
  return initial;
};
export const colorReducer = (state, action) => {
  switch (action.type) {
    case "All":
      return action.payload.filter((e) => e.color !== "All");
    case "Red":
      return action.payload.filter((e) => e.color === "Red");
    case "Blue":
      return action.payload.filter((e) => e.color === "Blue");
    case "White":
      return action.payload.filter((e) => e.color === "White");
    case "Brown":
      return action.payload.filter((e) => e.color === "Brown");
    case "Orange":
      return action.payload.filter((e) => e.color === "Orange");
    case "Gray":
      return action.payload.filter((e) => e.color === "Gray");
    case "Black":
      return action.payload.filter((e) => e.color === "Black");
    default:
      return state;
  }
};

const FiltringColor = ({ colorDispatch, imgData }) => {
  const classes = useStyle();
  const filterType = (color) => {
    colorDispatch({ type: color, payload: imgData });
  };
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Color</Typography>
      <Typography variant="body1" onClick={() => filterType("All")}>
        All
      </Typography>
      <Box className={classes.colors}>
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#0000ffaa" }}
          onClick={() => filterType("Blue")}
        />
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#ffffff" }}
          onClick={() => filterType("White")}
        />
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#ff0000" }}
          onClick={() => filterType("Red")}
        />
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#a53c00" }}
          onClick={() => filterType("Brown")}
        />
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#ff7300" }}
          onClick={() => filterType("Orange")}
        />
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#b3b3b3" }}
          onClick={() => filterType("Gray")}
        />
        <FiberManualRecordIcon
          className={classes.dot}
          style={{ color: "#000000" }}
          onClick={() => filterType("Black")}
        />
      </Box>
    </Box>
  );
};

export default FiltringColor;
