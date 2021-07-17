import React, { useState } from "react";
import { Box, Typography, makeStyles, Container } from "@material-ui/core";

import NoneImgCard from "./noneImgCard/NoneImgCard";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import StoreIcon from "@material-ui/icons/Store";
import HistoryIcon from "@material-ui/icons/History";

const useStyle = makeStyles((theme) => ({
  title: {
    maxWidth: "550px",
    margin: "auto",
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: { marginBottom: "20px" },
  },
  container: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: { padding: "0" },
  },

  box: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Custom = () => {
  const [cardData] = useState([
    {
      icon: <DynamicFeedIcon fontSize="large" />,
      title: "Mission",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia magnam officia? Cupiditate.",
    },
    {
      icon: <StoreIcon fontSize="large" />,
      title: "Vision",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia magnam officia? Cupiditate.",
    },
    {
      icon: <HistoryIcon fontSize="large" />,
      title: "History",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia magnam officia? Cupiditate.",
    },
  ]);
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Container>
        <Typography className={classes.title} variant="h3" align="center">
          Custom Furniture Built Only For You
        </Typography>
        <Box
          display="flex"
          justifyContent="space-around"
          className={classes.box}
        >
          {cardData.map((card) => {
            return <NoneImgCard key={card.title} data={card} />;
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Custom;
