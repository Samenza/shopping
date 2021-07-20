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
    minWidth: "250px",
    margin: " 10px",
    height: "fit-content",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  img: { objectPosition: "50% 62%" },
}));

const ProductCard = ({ imgData, history }) => {
  const classes = useStyle();

  const routeID = () => {
    history.push(`./Products/${imgData.id}`);
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
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">{imgData.name}</Typography>
            <Typography variant="body2">{imgData.price} $</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(ProductCard);
