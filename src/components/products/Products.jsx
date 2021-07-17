import React from "react";
import ProductHeader from "./header/ProductHeader";

import "./Products.css";
import Shop from "./shop/Shop";

const Products = () => {
  return (
    <div>
      <div className="background"></div>
      <ProductHeader />
      <Shop />
    </div>
  );
};

export default Products;
