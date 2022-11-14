import React from "react";
import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* text variant is typically used to grab less attention in ui, 
for example in card footer or confirmation pop up */}
        <Button variant="text">text</Button>

        {/* contained variant is used when we have to grab the user's attention and is used for primary
actions in app , ex: register or log in button */}

        <Button variant="contained">contained</Button>

        {/* outlined variant is in between these two variant and used for secondary actions 
ex: cancel or go back buttons */}

        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
      </Stack>
      {/* display flex is the default value */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined">Default</Button>

        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" startIcon={<AdbIcon />}>
          mouse
        </Button>

        {/* startIcon, endIcon, disableElevation, disableRipple,  */}
        <Button
          variant="contained"
          disableElevation
          disableRipple
          onClick={() => alert("abc")}
          endIcon={<AdbIcon />}
        >
          mouse
        </Button>
        <Button variant="contained" endIcon={<AdbIcon />}>
          mouse
        </Button>

        <Button color="error">
          <AdbIcon />
        </Button>

        {/* IconButton */}
        <IconButton aria-label="mouse" color="success" size="medium">
          <AdbIcon />
        </IconButton>
      </Stack>

      {/* ButtonGroup */}
      {/* possible scenerio: allowing user to align content lett|center|right */}

      <Stack direction="row">
        
        <Button variant="contained">Left</Button>
        <Button variant="contained">Center</Button>
        <Button variant="contained">Right</Button>
        
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant='outlined' orientation='vertical' size='small' aria-label='allignment button group'>
        <Button onClick={()=>{alert('left clicked')}}>Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>
        </ButtonGroup>
      </Stack>
      
    </Stack>
  );
};

export default MuiButton;
