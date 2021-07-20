import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  makeStyles,
  Typography,
  Hidden,
  CardMedia,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80vw",
    margin: "auto ",
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  title: {
    fontWeight: "600",
    padding: "10px",
  },
  paragraph: {
    lineHeight: "2.5rem",
    color: "#465d91",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  left_container: {
    maxWidth: "460px",

    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      textAlign: "center",
    },
  },
  right__container: {
    minHeight: "70vh",
    minWidth: "30vw",
    backgroundImage: "url(../images/HomeImages/HomeHeader.jfif)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    border: "none",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Hidden mdUp>
        <CardMedia
          height="200"
          component="img"
          image="../Images/HomeImages/HomeHeader.jfif"
        />
      </Hidden>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        className={classes.left_container}
      >
        <Typography className={classes.title} variant="h3" paragraph>
          Design Your Comfort Zone
        </Typography>
        <Typography
          variant="body1"
          classes={{ body1: classes.paragraph }}
          paragraph
          align="left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit
          ducimus eum laudantium commodi, voluptatibus recusandae at unde. Culpa
          minima corporis incidunt velit modi sunt, facilis esse aliquam.
        </Typography>
        <Link className={classes.link} to="/Products">
          <Button color="secondary" variant="contained">
            ShopNow
          </Button>
        </Link>
      </Box>
      <Hidden smDown>
        <div className={classes.right__container}></div>
      </Hidden>
    </div>
  );
};

export default Header;
