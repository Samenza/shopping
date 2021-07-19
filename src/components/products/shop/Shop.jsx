import React, { useEffect, useState } from "react";

import ProductCard from "./../../card/ProductCard";
import getProductImages from "./../../../services/productImgData/prodauctImgData";
import Filtering from "./filtering/Filtering";
import SearchBox from "./searchBox/SearchBox";
import Sort from "./sort/Sort";

import {
  categoryReducer,
  categoryInit,
} from "./filtering/filteringCategory/FiltringCategory";
import { useReducer } from "react";
import {
  colorInit,
  colorReducer,
} from "./filtering/filtringColor/FiltringColor";

import { makeStyles, Container, Box } from "@material-ui/core";
import ListModeCard from "./../../card/ListModeCard";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: "2rem",
    minHeight: "75vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  shopMain: {
    backgroundColor: "#f1f1f1",
    width: "100%",
  },
  shopBox: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const Shop = () => {
  const [imgData] = useState(getProductImages());
  const [filterd, setFilterd] = useState([]);
  const [priceFiltring, setPriceFiltering] = useState(imgData);
  const [productsViewMode, setProductsViewMode] = useState("Module");
  const [categoryFiltering, categoryDispatch] = useReducer(
    categoryReducer,
    imgData,
    categoryInit
  );
  const [colorFiltring, colorDispatch] = useReducer(
    colorReducer,
    imgData,
    colorInit
  );

  useEffect(() => {
    let data = categoryFiltering.filter((category) => {
      return colorFiltring.indexOf(category) > -1;
    });

    data = data.filter((e) => {
      return priceFiltring.indexOf(e) > -1;
    });

    setFilterd(data);
  }, [categoryFiltering, colorFiltring, priceFiltring]);
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.shopMain}>
        <SearchBox />
        <Container className={classes.container}>
          <Filtering
            imgData={imgData}
            categoryDispatch={categoryDispatch}
            colorDispatch={colorDispatch}
            setPriceFiltering={setPriceFiltering}
          />

          <Box display="flex" flexDirection="column" width="75%">
            <Sort
              productsLength={filterd.length}
              setFilterd={setFilterd}
              filterd={filterd}
              setProductsViewMode={setProductsViewMode}
              productsViewMode={productsViewMode}
            />
            <Box className={classes.shopBox}>
              {filterd.map((image) => {
                return productsViewMode === "Module" ? (
                  <ProductCard imgData={image} key={image.imgSrc} />
                ) : (
                  <ListModeCard key={image.imgSrc} imgData={image} />
                );
              })}
            </Box>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Shop;
