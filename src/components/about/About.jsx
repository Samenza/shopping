import React from "react";
import {
  Container,
  Box,
  Typography,
  Hidden,
  makeStyles,
  Divider,
  CardMedia,
} from "@material-ui/core";

const useStyle = makeStyles({
  cardMedia: {
    width: "40%",
    borderRadius: "5px",
  },
  container: {
    minHeight: "70vh",
    margin: "5rem 0 2rem 0",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    margin: " 2rem 0 0 1rem ",
  },
});
const About = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Box display="flex" width="75%">
        <Hidden smDown>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image="../Images/HomeImages/about.jpg"
          />
        </Hidden>
        <Box display="flex" flexDirection="column" m={4}>
          <Typography variant="h2">Our story</Typography>
          <Divider />
          <Typography variant="body2" className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            voluptates ducimus expedita eos, pariatur consequatur, ad fugit
            animi repellendus molestiae omnis eius aliquid quas inventore
            numquam provident facere error et voluptatum nostrum asperiores
            dolorum! Iusto at rerum eius? Quibusdam hic maxime facilis tempore
            porro quod sequi voluptas sit excepturi cum.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
