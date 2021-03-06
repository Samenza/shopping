import React from "react";

import { Badge, Box, Button, makeStyles, useTheme } from "@material-ui/core";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";

import "../transition.css";
import { useMediaQuery } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  icon: {
    textTransform: "none",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  main: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "0 1rem ",
    },
  },
}));

const UserIcon = ({ setShow, cart }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const closeDrawer = () => {
    setShow(false);
  };

  let onResponseBottonAddName = (
    <React.Fragment>
      <NavLink className="nav_items" to="/home/cart">
        <Button disableRipple className={classes.icon}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon style={{ fontSize: 30 }} />
          </Badge>
        </Button>
      </NavLink>
      <NavLink className="nav_items" to="/auth/login">
        <Button className={classes.icon} variant="text">
          <AccountBoxIcon style={{ fontSize: 30 }} />
        </Button>
      </NavLink>
    </React.Fragment>
  );
  if (matches) {
    onResponseBottonAddName = (
      <React.Fragment>
        <NavLink className="nav_items" to="/home/cart" onClick={closeDrawer}>
          <Button
            disableRipple
            className={classes.icon}
            startIcon={
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon style={{ fontSize: 30 }} />
              </Badge>
            }
          >
            Cart
          </Button>
        </NavLink>
        <NavLink className="nav_items" to="/auth/login" onClick={closeDrawer}>
          <Button
            className={classes.icon}
            variant="text"
            startIcon={<AccountBoxIcon style={{ fontSize: 30 }} />}
          >
            Login
          </Button>
        </NavLink>
      </React.Fragment>
    );
  }
  return (
    <Box display="flex" className={classes.main}>
      {onResponseBottonAddName}
    </Box>
  );
};

export default UserIcon;
