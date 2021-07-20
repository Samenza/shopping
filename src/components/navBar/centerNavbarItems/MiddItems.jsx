import React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import KingBedIcon from "@material-ui/icons/KingBed";

import "../transition.css";

const useStyle = makeStyles((theme) => ({
  navbarCenterItems: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  icon: {
    fontSize: "0.9rem",
    margin: "10px 0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const MidItems = ({ setShow }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const closeDrawer = () => {
    setShow(false);
  };

  return (
    <Box
      className={classes.navbarCenterItems}
      display="flex"
      justifyContent="space-around"
      px={2}
    >
      {matches ? (
        <React.Fragment>
          <NavLink
            className="nav_items nav_items_font"
            exact
            to="/"
            onClick={closeDrawer}
          >
            <Button
              className={classes.icon}
              startIcon={<HomeIcon style={{ fontSize: 30 }} />}
            >
              Home
            </Button>
          </NavLink>
          <NavLink
            className="nav_items nav_items_font"
            to="/Products"
            onClick={closeDrawer}
          >
            <Button
              className={classes.icon}
              startIcon={<KingBedIcon style={{ fontSize: 30 }} />}
            >
              Products
            </Button>
          </NavLink>
          <NavLink
            className="nav_items nav_items_font"
            to="/About"
            onClick={closeDrawer}
          >
            <Button
              className={classes.icon}
              startIcon={<InfoIcon style={{ fontSize: 30 }} />}
            >
              About
            </Button>
          </NavLink>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavLink className="nav_items nav_items_font" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav_items nav_items_font" to="/Products">
            Products
          </NavLink>
          <NavLink className="nav_items nav_items_font" to="/About">
            About
          </NavLink>
        </React.Fragment>
      )}
    </Box>
  );
};

export default MidItems;
