import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  
} from "@mui/material";
import React from "react";

//by default AppBar's position is fixed
//toolbar component add some padding left and right side in navbar
// flexGrow in typography is allocating all free space

// menu => on button onClick it will return setStateVariable to the button's element
//in menu el anchorEl will receive the value to know where to be anchored and open prop when it wil
//positioning : def: bottom left anchorOrigin:{}, transformOrigin: {}
const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [featureEl, setFeatureEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
  };
  const handleClick1 = (e) => {
    setFeatureEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setFeatureEl(null);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon></CatchingPokemon>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            POKEMON APP{" "}
          </Typography>

          <Stack spacing={2} direction="row">
            <Button color="inherit" onClick={handleClick1}
            endIcon={<KeyboardArrowDown/>}>
              Features
            </Button>
            <Button color="inherit"> Pricing</Button>
            <Button color="inherit"> About</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resource-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDown/>}
            >
              Resource
            </Button>
            <Button color="inherit"> LogIn</Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ "aria-labelledby": "resource-button" }}
            onClose={handleClose}
            
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {/* <Box sx={{marginTop:'10px'}}>
        <Typography variant="body1" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum a
          facere sunt assumenda optio.
        </Typography>
      </Box> */}
      <Menu
        anchorEl={featureEl}
        open={Boolean(featureEl)}
        onClose={handleClose1}
        anchorOrigin={{vertical:'top',horizontal:'right'}}
        transformOrigin={{vertical:'top',horizontal:'right'}}
      >
        <MenuItem
          onClick={() => {
            alert("clicked!");
            handleClose1();
          }}
        >
          {" "}
          Feature Item1
        </MenuItem>
        <MenuItem
          onClick={() => {
            alert("clicked!");
            handleClose1();
          }}
        >
          {" "}
          Feature Item2
        </MenuItem>
      </Menu>
    </>
  );
};

export default MuiNavbar;
