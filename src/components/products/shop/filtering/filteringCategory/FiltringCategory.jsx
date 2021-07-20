import React, { useState } from "react";
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
  const [active, setActive] = useState("All");
  const filterType = (categoryType, e) => {
    categoryDispatch({ type: categoryType, payload: imgData });
    setActive(e.target.innerText);
  };

  const [buttons] = useState([
    { text: "All", variant: "body1" },
    { text: "LivingRoom", variant: "body1" },
    { text: "BedRoom", variant: "body1" },
    { text: "Dining", variant: "body1" },
    { text: "Office", variant: "body1" },
  ]);
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Category</Typography>
      {buttons.map((item) => {
        return (
          <Typography
            color={active === item.text ? "secondary" : "primary"}
            key={item.text}
            onClick={(e) => filterType(item.text, e)}
            variant={item.variant}
          >
            {item.text}
          </Typography>
        );
      })}
    </Box>
  );
};

export default FilteringCategory;
