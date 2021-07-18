import React, { useState, useEffect } from "react";
import { FormControl, Typography, makeStyles } from "@material-ui/core";
import { useRef } from "react";

const FiltringPrice = ({ imgData, setPriceFiltering }) => {
  const classes = useStyle();
  const [maxPrice, setMaxPrice] = useState(null);
  const [price, setPrice] = useState();
  const largest = useRef(0);

  useEffect(() => {
    for (let e of imgData) {
      if (e.price >= largest.current) {
        largest.current = e.price;
      }
    }
    setMaxPrice(largest.current);
    setPrice(largest.current);
  }, [imgData]);
  const inputOnChange = (input) => {
    let data = imgData.filter((e) => {
      return e.price < input.target.value;
    });
    setPrice(input.target.value);
    setPriceFiltering(data);
  };
  return (
    <React.Fragment>
      {maxPrice && (
        <FormControl>
          <Typography variant="h6">Price</Typography>
          <label htmlFor="inputRange">$ {price}</label>
          <input
            className={classes.input}
            id="inputRange"
            type="range"
            min="0"
            max={maxPrice + 1}
            defaultValue={maxPrice}
            onChange={inputOnChange}
          />
        </FormControl>
      )}
    </React.Fragment>
  );
};
const useStyle = makeStyles({
  input: {
    cursor: "pointer",
  },
});
export default FiltringPrice;
