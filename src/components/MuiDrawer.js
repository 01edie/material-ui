import { Menu } from "@mui/icons-material";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";


// sidebar, top/bottom bar also
//props: open, onClose, anchor(position)

//this is a temporary drawer , mui also supports permanent drawer variant
const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu></Menu>
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} height="350px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
