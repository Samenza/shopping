import React, { useState } from "react";
import HomePage from "../homePage/HomePage";
import NavBar from "../navBar/NavBar";
import Footer from "./footer/Footer";
import Products from "./../products/Products";
import About from "./../about/About";

import { Switch, Route, withRouter } from "react-router-dom";

import "./main.css";
import { useEffect } from "react";
import Contact from "./contact/Contact";
import ProductsMoreDetail from "./../productsMoreDetails/ProductsMoreDetail";
import Cart from "./../cart/Cart";
import ScrollTop from "../../hoc/scrollTop/ScrollTop";
const MainPage = ({ location, match }) => {
  const [mainPageClass, setMainPageClass] = useState("main__page");
  const [navBarBackgound, setNavBarBackgound] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (
      location.pathname === "/Home" ||
      location.pathname === "/home" ||
      location.pathname === "/Home/" ||
      location.pathname === "/home/"
    ) {
      setMainPageClass("main__page");
      setNavBarBackgound("");
    } else {
      setMainPageClass("");
      setNavBarBackgound("navBarBackgound");
    }
  }, [location.pathname]);
  return (
    <div className={mainPageClass}>
      <ScrollTop />
      <NavBar navBarBackgound={navBarBackgound} cart={cart} />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path={`${match.url}/products`} component={Products} />
        <Route
          path={`${match.url}/products/:id`}
          render={() => <ProductsMoreDetail setCart={setCart} cart={cart} />}
        />
        <Route path={`${match.url}/about`} component={About} />
        <Route
          path={`${match.url}/cart`}
          render={() => <Cart cart={cart} setCart={setCart} />}
        />
      </Switch>
      <Contact />
      <Footer />
    </div>
  );
};

export default withRouter(MainPage);
