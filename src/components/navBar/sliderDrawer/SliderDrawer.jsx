import { Drawer, makeStyles, Box, Divider, Hidden } from "@material-ui/core";
import React from "react";
import UserIcon from "../user&cartIcon/UserIcon";
import MidItems from "./../centerNavbarItems/MiddItems";

import logo from "../../../assets/logo/comf.svg";

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  line: {
    backgroundColor: "#7c7c7c",
  },
}));
const SliderDrawer = ({ show, setShow }) => {
  const classes = useStyle();
  return (
    <Hidden mdUp>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={show}
        onClose={() => setShow(false)}
        anchor="right"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          py={3}
        >
          <img src={logo} alt="" />
          <Divider classes={{ root: classes.line }} variant="middle" />
          <UserIcon />
          <Divider className={classes.line} variant="middle" />
          <MidItems />
        </Box>
      </Drawer>
    </Hidden>
  );
};

export default SliderDrawer;
