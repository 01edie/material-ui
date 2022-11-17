import { Badge, Stack } from "@mui/material";
import { Mail } from "@mui/icons-material";
import React from "react";

//Badge generates a small badge to the top right of it's child el
//props: showZero, max(default-99),variant, invisible={true}(for dot variant)
const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <Mail color="warning" />
      </Badge>
      <Badge badgeContent={5} color="secondary" >
        <Mail color="warning" sx={{fontSize:'2rem'}}/>
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <Mail  />
      </Badge>
      <Badge badgeContent={102} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={102} color="primary" max={999} onClick={()=>alert('..!')}>
        <Mail />
      </Badge>
      <Badge variant='dot' color="primary" max={999}>
        <Mail />
      </Badge>
      <Badge variant='dot' color="primary" max={999} invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
