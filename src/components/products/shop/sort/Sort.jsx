import React, { useState } from "react";

import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import {
  Button,
  Box,
  Divider,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyle = makeStyles({
  icon: {
    fontSize: 30,
    color: "#141414e3",
    paddingRight: "10px",
  },
  divider: {
    width: "2px",
    margin: "0 1rem",
  },
  Box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
const Sort = ({ productsLength }) => {
  let classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.Box}>
      <FormatListBulletedIcon className={classes.icon} />
      <ViewModuleRoundedIcon className={classes.icon} />
      <Divider orientation="vertical" className={classes.divider} />
      <Typography variant="body1"> {productsLength} Products Found</Typography>
      <Divider orientation="vertical" className={classes.divider} />
      <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />}>
        <Typography variant="body1">Sort By</Typography>
      </Button>
      <Menu anchorEl={anchorEl} open={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Sort;
