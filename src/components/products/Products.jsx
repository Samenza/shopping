import React from "react";
import ProductHeader from "./header/ProductHeader";

import "./Products.css";
import Shop from "./shop/Shop";
import { Box } from "@material-ui/core";

const Products = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <div className="background"></div>
      <ProductHeader />
      <Shop />
    </Box>
  );
};

export default Products;
