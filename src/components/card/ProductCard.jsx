import React from "react";
import { withRouter } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "30%",
    margin: " 10px",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      minWidth: "auto",
      maxWidth: "270px",
    },
  },
  img: { objectPosition: "50% 62%" },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const ProductCard = ({ imgData, history }) => {
  const classes = useStyle();

  const routeID = () => {
    history.push(`/home/products/${imgData.id}`);
  };
  return (
    <Card classes={{ root: classes.root }} onClick={routeID}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`${imgData.imgSrc}`}
          alt={imgData.alt}
          classes={{ img: classes.img }}
        />
        <CardContent>
          <Box className={classes.textContainer}>
            <Typography variant="body2">{imgData.name}</Typography>
            <Typography variant="body2">{imgData.price} $</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(ProductCard);
