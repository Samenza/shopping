import React from "react";

import MainPageProduct from "../mainPage/product/MainPageProduct";
import Custom from "../mainPage/customInfo/Custom";
import Contact from "../mainPage/contact/Contact";
import Header from "./../mainPage/header/Header";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPageProduct />
      <Custom />
      <Contact />
    </React.Fragment>
  );
};

export default HomePage;
