import React, { useState } from "react";
import HomePage from "../homePage/HomePage";
import NavBar from "../navBar/NavBar";
import Footer from "./footer/Footer";
import Products from "./../products/Products";
import About from "./../about/About";

import { Switch, Route, withRouter } from "react-router-dom";

import "./main.css";
import { useEffect } from "react";
const MainPage = (props) => {
  const [mainPageClass, setMainPageClass] = useState("main__page");
  const [navBarBackgound, setNavBarBackgound] = useState("");

  useEffect(() => {
    if (props.location.pathname === "/Products") {
      setMainPageClass("");
      setNavBarBackgound("navBarBackgound");
    } else {
      setMainPageClass("main__page");
      setNavBarBackgound("");
    }
  }, [props.location.pathname]);

  return (
    <div className={mainPageClass}>
      <NavBar navBarBackgound={navBarBackgound} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/About" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(MainPage);
