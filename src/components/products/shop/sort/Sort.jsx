import React, { useState } from "react";
import {
  Button,
  Box,
  Divider,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const useStyle = makeStyles({
  icon: {
    fontSize: 30,

    "&:hover": {
      color: "#cf7748",
    },
  },
  divider: {
    width: "2px",
    height: "5vh",
    margin: "0 1rem",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  sortIcon: {
    textTransform: "none",
    "&:hover": {
      color: "#cf7748",
    },
  },
  sortIconList: {
    marginTop: "2.5rem",
    "&:hover": {
      color: "#cf7748",
    },
  },
});
const Sort = ({
  productsLength,
  setFilterd,
  filterd,
  setProductsViewMode,
  productsViewMode,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sort, setSort] = useState("Name");
  const [sortIcon] = useState([<ArrowDropDownIcon />, <ArrowDropUpIcon />]);
  const [sortIconChange, setSortIconChange] = useState();
  let classes = useStyle();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortDisplayNameHandle = (e) => {
    setSort(e.target.innerText);
    setAnchorEl(null);
  };
  const sortDataHandle = () => {
    sortIconChange === 0 ? setSortIconChange(1) : setSortIconChange(0);

    if (sort === "Name") {
      let data = [...filterd].sort((a, b) => {
        let A = a.name.toUpperCase();
        let B = b.name.toUpperCase();
        return A < B ? -1 : 1;
      });
      setFilterd(data);
    }

    if (sort === "Price") {
      let data = [...filterd].sort((a, b) => {
        return a.price - b.price;
      });
      setFilterd(data);
    }

    if (sortIconChange === 0) {
      let data = [...filterd];
      data.reverse();
      setFilterd(data);
    }
  };

  return (
    <Box className={classes.box}>
      <Box>
        <IconButton
          color={productsViewMode === "Module" ? "secondary" : "inherit"}
          onClick={() => setProductsViewMode("Module")}
        >
          <ViewModuleRoundedIcon className={classes.icon} />
        </IconButton>
        <IconButton
          color={productsViewMode === "List" ? "secondary" : "inherit"}
          onClick={() => setProductsViewMode("List")}
        >
          <FormatListBulletedIcon className={classes.icon} />
        </IconButton>
      </Box>
      <Divider orientation="vertical" className={classes.divider} />
      <Typography variant="body1"> {productsLength} Products Found</Typography>
      <Divider orientation="vertical" className={classes.divider} />
      <Button onClick={handleClick} className={classes.sortIcon}>
        <Typography variant="body1"> Sort By</Typography>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.sortIconList }}
      >
        <MenuItem onClick={sortDisplayNameHandle}>Name</MenuItem>
        <MenuItem onClick={sortDisplayNameHandle}>Price</MenuItem>
      </Menu>
      <Button className={classes.sortIcon} onClick={sortDataHandle}>
        <Typography variant="body1">{sort}</Typography>
        {sortIcon[sortIconChange]}
      </Button>
    </Box>
  );
};

export default Sort;
