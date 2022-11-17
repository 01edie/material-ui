import { Stack, Avatar, AvatarGroup } from "@mui/material";
import React from "react";

//by default- rounded and gray bg
//sx
// can be used using img src

// avatars can be grouped , useful for showcasing speakers for event ,
//avatargroup props:props: max
const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
            BW
          </Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="jane doe"
          ></Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="john doe"
          ></Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
      
          <Avatar
          variant='square'
            sx={{ bgcolor: "success.light", width: 48, height: 48 }}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="jane doe"
          ></Avatar>
          <Avatar
          variant='rounded'
            sx={{ bgcolor: "success.light", width: 48, height: 48 }}
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="john doe"
          ></Avatar>
       
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
