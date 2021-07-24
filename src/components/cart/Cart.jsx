import React, { useEffect, useState } from "react";
import {
  Container,
  Divider,
  makeStyles,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import CartAddedItemCart from "../card/CartAddedItemCard";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  container: {
    minHeight: "40vh",
    margin: "8rem 0 4rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      alignItems: "space-between",
    },
  },
  divider: {
    width: "90%",
  },
  totalPriceBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "Center",
    flexDirection: "column",
    marginTop: "4rem",
    [theme.breakpoints.down("xs")]: {},
  },
  btnContainer: {
    padding: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  btn: {
    margin: "0 1rem",
    "& a": {
      textDecoration: "none",
      color: "#000000",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0 ",
    },
  },
}));
const Cart = ({ cart, setCart }) => {
  const classes = useStyle();
  const [totalPrice, setTotoalPrice] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    for (let product of cart) {
      if (product.itemTotlaPrice) {
        totalPrice = totalPrice + product.itemTotlaPrice;
      }
    }
    setTotoalPrice(totalPrice);
  }, [cart]);

  const deleteHandle = (deletedElement) => {
    let data = cart.filter((product) => {
      return product !== deletedElement;
    });
    setCart(data);
  };
  return (
    <Container>
      <div className={classes.container}>
        {cart.length ? (
          cart.map((product) => {
            return (
              <React.Fragment key={product.id + Math.random()}>
                <CartAddedItemCart
                  product={product}
                  deleteHandle={deleteHandle}
                />
                <Divider className={classes.divider} />
              </React.Fragment>
            );
          })
        ) : (
          <Typography variant="h5"> your Cart is Empty</Typography>
        )}
        {cart.length !== 0 && (
          <Box className={classes.totalPriceBox}>
            <Typography variant="h6">
              total Price = {totalPrice.toFixed(2)}$
            </Typography>
            <Box className={classes.btnContainer}>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
              >
                <Link to="/home/Products"> continue shopping</Link>
              </Button>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
              >
                Purchase
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </Container>
  );
};

export default Cart;
