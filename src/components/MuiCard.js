import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";
import React from "react";

//Card component
// contains content and action about a single topic
// it takes the parent's width
// actions in bottom
const MuiCard = () => {
  return (
    <Box width="300px">
      <Card elevation={18}>
        <CardMedia component='img' height='140px' image='https://source.unsplash.com/random' alt='a picture'>
            
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            repellat quis dicta officia modi quia facilis suscipit incidunt
            fugiat iusto.
          </Typography>
        </CardContent>
        <CardActions>
            <Button >Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
