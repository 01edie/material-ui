import { Mail } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import React from "react";

//displaying data as list
//props:
const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List item 1" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mail />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary="List item 2" />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mail />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary="List item 3"  secondary='lorem imsup ignum'/>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
