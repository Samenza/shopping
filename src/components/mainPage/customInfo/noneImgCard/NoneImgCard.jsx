import React from "react";

import {
  Card,
  CardContent,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  contain: {
    maxWidth: "25%",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#8bd1ff49",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      margin: "1rem",
    },
  },
}));

const NoneImgCard = ({ data }) => {
  const classes = useStyle();
  return (
    <Card className={classes.contain}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          {data.icon}
          <Typography variant="h4" paragraph>
            {data.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {data.paragraph}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NoneImgCard;
