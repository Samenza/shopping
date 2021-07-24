import React, { useEffect, useState } from "react";
import getProductImages from "./../../services/productImgData/prodauctImgData";
import {
  CardMedia,
  Container,
  makeStyles,
  Typography,
  Divider,
  IconButton,
  Hidden,
  Button,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { withRouter } from "react-router";

const useStyle = makeStyles((theme) => ({
  Container: { marginTop: "5rem" },
  mainBox: {
    display: "flex",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "0",
    },
  },
  cardMediaMain: {
    width: "100%",
    height: "65vh",
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
    },
  },
  cardMediaSmall: {
    width: "4rem",
    height: "4rem",
    cursor: "pointer",
  },
  otherImgBox: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "10px 0 ",
  },

  imgContainerBoxMain: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  textContainers: {
    width: "40%",
    padding: "0 3rem ",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
      textAlign: "center",
      width: "100%",
    },

    "& hr": {
      margin: "1rem 0",
    },
  },
  text: {
    color: "#0e1749",
    margin: "3rem 0 1.5rem 0 ",
  },
  icon: {
    margin: "0 1rem ",
  },
  iconContainer: {
    display: "flex",
    margin: " 2rem 0 0 -2rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "0",
    },
  },
  centerBox: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-around",
    },
  },
  price: {
    marginTop: "2rem",
  },
  selectedImg: {
    boxShadow: "0 0 3px 3px #944f18",
    width: "4rem",
    height: "4rem",
    cursor: "pointer",
  },
}));
const ProductsMoreDetail = ({ setCart, match, history, cart }) => {
  const [product, setProduct] = useState();
  const [mainImg, setMainImg] = useState([]);
  const [counter, setCounter] = useState(1);

  const classes = useStyle();
  useEffect(() => {
    let data = getProductImages().find(({ id }) => {
      return id === match.params.id;
    });
    console.log(data);
    setProduct(data);
    setMainImg({ src: data.imgSrc, id: 1 });
  }, [match.params.id]);

  const addToCart = () => {
    console.log(cart.find((e) => e.name === product.name));
    let data = {};
    data.imgSrc = product.imgSrc;
    data.name = product.name;
    data.price = product.price;
    data.itemTotlaPrice = product.price * counter;
    data.alt = product.alt;
    data.id = product.id;
    data.number = counter;
    setCart((e) => [...e, data]);
    history.push("/home/cart");
  };
  return (
    <div>
      {mainImg.src && (
        <Container className={classes.Container}>
          <Box className={classes.mainBox}>
            <Box className={classes.imgContainerBoxMain}>
              <CardMedia
                className={classes.cardMediaMain}
                image={mainImg.src}
                component="img"
              />
              <Hidden xsDown>
                <Paper className={classes.otherImgBox}>
                  {product.otherImgs.map((img) => {
                    return (
                      <CardMedia
                        key={img.id}
                        className={
                          mainImg.id === img.id
                            ? classes.selectedImg
                            : classes.cardMediaSmall
                        }
                        image={img.src}
                        component="img"
                        onClick={() => setMainImg({ src: img.src, id: img.id })}
                      />
                    );
                  })}
                </Paper>
              </Hidden>
              <Hidden smUp>
                <Paper className={classes.otherImgBox}>
                  {product.otherImgs.map((img) => {
                    return (
                      <FiberManualRecordIcon
                        cursor="pointer"
                        key={img.id}
                        onClick={() => setMainImg({ src: img.src, id: img.id })}
                        color={mainImg.id === img.id ? "secondary" : "primary"}
                      />
                    );
                  })}
                </Paper>
              </Hidden>
            </Box>
            <Box className={classes.textContainers}>
              <Typography variant="h3">{product.name}</Typography>
              <Typography
                variant="h5"
                color="secondary"
                className={classes.price}
              >
                {product.price} $
              </Typography>
              <Typography variant="body2" className={classes.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad
                autem voluptates rerum. Nisi, molestias magnam libero quod
                molestiae eum, architecto quidem saepe perspiciatis dicta
                corrupti porro perferendis, ratione modi nulla quia odit?
              </Typography>
              <Divider />
              <Box className={classes.centerBox}>
                <Typography variant="h6"> Available: </Typography>
                <Typography variant="body1">{product.available}</Typography>
              </Box>
              <Box className={classes.centerBox}>
                <Typography variant="h6">Brand:</Typography>
                <Typography variant="body1">{product.brand}</Typography>
              </Box>
              <Divider />
              {product.available === "In Stock" && (
                <Box className={classes.iconContainer}>
                  <IconButton
                    className={classes.icon}
                    onClick={() => setCounter((c) => c + 1)}
                    disabled={counter === 10 ? true : false}
                  >
                    <AddIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h3">{counter} </Typography>
                  <IconButton
                    className={classes.icon}
                    disabled={counter === 1 ? true : false}
                    onClick={() => setCounter((c) => c - 1)}
                  >
                    <RemoveIcon fontSize="large" />
                  </IconButton>
                  <Button variant="contained" onClick={addToCart}>
                    Add
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default withRouter(ProductsMoreDetail);
