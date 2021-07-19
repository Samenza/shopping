import React from "react";
import { Typography, Box } from "@material-ui/core";

export function categoryInit(initial) {
  return initial;
}

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "All":
      return categoryInit(action.payload).filter((e) => {
        return e.category !== "All";
      });

    case "LivingRoom":
      return categoryInit(action.payload).filter((e) => {
        return e.category === "LivingRoom";
      });
    case "Office":
      return categoryInit(action.payload).filter((e) => {
        return e.category === "Office";
      });
    case "Dining":
      return categoryInit(action.payload).filter((e) => {
        return e.category === "Dining";
      });
    case "BedRoom":
      return categoryInit(action.payload).filter((e) => {
        return e.category === "BedRoom";
      });

    default:
      return state;
  }
};

const FilteringCategory = ({ categoryDispatch, imgData }) => {
  const filterType = (categoryType) => {
    categoryDispatch({ type: categoryType, payload: imgData });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Category</Typography>
      <Typography onClick={() => filterType("All")} variant="body1">
        All
      </Typography>
      <Typography onClick={() => filterType("LivingRoom")} variant="body1">
        Living Room
      </Typography>
      <Typography onClick={() => filterType("BedRoom")} variant="body1">
        Bed Room
      </Typography>
      <Typography onClick={() => filterType("Dining")} variant="body1">
        Dining
      </Typography>
      <Typography onClick={() => filterType("Office")} variant="body1">
        Office
      </Typography>
    </Box>
  );
};

export default FilteringCategory;
