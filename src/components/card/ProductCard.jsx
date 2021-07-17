import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "30%",
    minWidth: "250px",
    margin: " 10px",

    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  img: { objectPosition: "50% 62%" },
}));

const ProductCard = ({ imgData }) => {
  const classes = useStyle();
  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`${imgData.imgSrc}`}
          alt={imgData.alt}
          classes={{ img: classes.img }}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography className="img_info" variant="body2">
              {imgData.name}
            </Typography>
            <Typography className="img_info" variant="body2">
              {imgData.price} $
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
