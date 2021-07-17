import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";
import ProductCard from "../../card/ProductCard";
import getFeaturedImgs from "./../../../services/imageData/images";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  contain: {
    backgroundColor: "#fce7dc",
    width: "100%",
    padding: "50px 0",
    marginTop: "50px",
    boxSizing: "border-box",
  },
  link: { textDecoration: "none", color: "#ffffff" },
  btn: {
    marginTop: "2rem",
  },
});
const MainPageProduct = () => {
  const [data] = useState(getFeaturedImgs());
  const classes = useStyle();
  return (
    <div className={classes.contain}>
      <Container>
        <Box textAlign="center">
          <Typography variant="h2" paragraph>
            Featured Products
          </Typography>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            {data &&
              data.map((image) => {
                return <ProductCard key={image.imgSrc} imgData={image} />;
              })}
          </Box>

          <Link className={classes.link} to="/Products">
            <Button
              className={classes.btn}
              color="secondary"
              variant="contained"
            >
              ShopNow
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default MainPageProduct;
