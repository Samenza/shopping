import React from "react";
import { withRouter } from "react-router";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  main: {
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  img: {
    objectPosition: "50% 62%",
    width: "35%",
    height: "13rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "40vh",
    },
  },
  cartContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& p": {
      margin: "10px 0",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));
const ListModeCard = ({ imgData, history }) => {
  const classes = useStyle();
  const routeID = () => {
    history.push(`./Products/${imgData.id}`);
  };
  return (
    <Card className={classes.main} onClick={routeID}>
      <CardActionArea className={classes.container}>
        <CardMedia
          component="img"
          image={`${imgData.imgSrc}`}
          alt={imgData.alt}
          classes={{ media: classes.img }}
        />
        <CardContent className={classes.cartContent}>
          <Typography variant="h5">{imgData.name}</Typography>
          <Typography variant="body2">{imgData.price} $</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            tempora consectetur magnam?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(ListModeCard);
