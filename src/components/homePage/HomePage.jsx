import React from "react";

import MainPageProduct from "../mainPage/product/MainPageProduct";
import Custom from "../mainPage/customInfo/Custom";
import Header from "./../mainPage/header/Header";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPageProduct />
      <Custom />
    </React.Fragment>
  );
};

export default HomePage;
