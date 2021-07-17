import React from "react";
import { makeStyles, Container, Box } from "@material-ui/core";
import ProductCard from "./../../card/ProductCard";
import getProductImages from "./../../../services/productImgData/prodauctImgData";
import Filtering from "./filtering/Filtering";

const useStyle = makeStyles({
  container: {
    display: "flex",
  },
  shopMain: {
    backgroundColor: "#ececec",
  },
  shopBox: {
    width: "75%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10vh",
    justifyContent: "center",
  },
});

const Shop = () => {
  const classes = useStyle();
  return (
    <div className={classes.shopMain}>
      <Container className={classes.container}>
        <div>
          <Filtering />
        </div>
        <Box className={classes.shopBox}>
          {getProductImages().map((image) => {
            return <ProductCard key={image.imgSrc} imgData={image} />;
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Shop;
