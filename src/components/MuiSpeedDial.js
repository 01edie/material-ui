import { Edit, Print, Share } from "@mui/icons-material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";


//navigation related component
//more suited for mobile or tablet width
//SpeedDial prop openIcon
//SpeedDialAction props: icon,tooltipTitle, tooltipOpen, 
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit/>}/>}
      
    >
    <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' onClick={()=>alert('copied')}></SpeedDialAction>
    <SpeedDialAction icon={<Print/>} tooltipTitle='Print' tooltipOpen></SpeedDialAction>
    <SpeedDialAction icon={<Share/>} tooltipTitle='Share' tooltipOpen></SpeedDialAction>

    </SpeedDial>
  );
};

export default MuiSpeedDial;
