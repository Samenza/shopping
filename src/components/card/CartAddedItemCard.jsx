import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  Box,
  Button,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  actionArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cardText: {
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  cartMedia: {
    height: "100%",
    width: "20%",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "50%",
    },
  },
}));
const CartAddedItemCart = ({ product, deleteHandle }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Box className={classes.actionArea}>
        <CardMedia
          className={classes.cartMedia}
          component="img"
          image={product.imgSrc}
        />
        <CardContent className={classes.cardText}>
          <Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography color="secondary" variant="body2">
              {product.price}$
            </Typography>
          </Box>

          <Typography variant="body2">{product.number}x</Typography>
          <Typography variant="body2">
            {product.itemTotlaPrice.toFixed(2)} $
          </Typography>
          <Button onClick={() => deleteHandle(product)}>
            <DeleteIcon />
          </Button>
        </CardContent>
      </Box>
    </div>
  );
};

export default CartAddedItemCart;
