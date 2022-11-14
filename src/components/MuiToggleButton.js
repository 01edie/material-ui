import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const MuiToggleButton = () => {
  const [format, setFormat] = useState('');
  const handleFormatChange = (event, updatedFormats) => {
    setFormat(updatedFormats);
  };
  console.log(format);
  return (
    <div>
      <Stack direction="row">
        <ToggleButtonGroup
          value={format}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

     <Stack display='block'>
      <ToggleButton value='ac' onChange={(event,value)=>{console.log(value)}} color='success'>a</ToggleButton>
     </Stack>
    </div>
  );
};

export default MuiToggleButton;
