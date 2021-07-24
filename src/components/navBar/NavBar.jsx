import React, { useState } from "react";
import { Link } from "react-router-dom";

import SliderDrawer from "./sliderDrawer/SliderDrawer";
import MidItems from "./centerNavbarItems/MiddItems";

import UserIcon from "./user&cartIcon/UserIcon";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, makeStyles, Button } from "@material-ui/core";
import { Hidden } from "@material-ui/core";

import logo from "../../assets/logo/comf.svg";

const useStyle = makeStyles((theme) => ({
  logo: {
    width: "200px",
  },
  logoContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      width: "50%",
    },
  },
  navbar: {},
}));

const NavBar = ({ navBarBackgound, cart }) => {
  const [show, setShow] = useState(false);
  const classes = useStyle();
  const SliderShowHandle = () => {
    setShow(true);
  };

  return (
    <Box
      //navBarBackgound is in mainPage/main.css , ==>product page navbar has diffrent shape
      className={navBarBackgound}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      p={2}
    >
      <Link className={classes.logoContainer} to="/">
        <img className={classes.logo} src={logo} alt="" />
      </Link>
      <Hidden smDown>
        <MidItems />
      </Hidden>

      <Hidden smDown>
        <UserIcon cart={cart} />
      </Hidden>
      <Hidden mdUp>
        <Button>
          <MenuIcon
            onClick={SliderShowHandle}
            fontSize="large"
            color="secondary"
          />
        </Button>
      </Hidden>
      <SliderDrawer show={show} setShow={setShow} cart={cart} />
    </Box>
  );
};

export default NavBar;
