import { Box, FormControlLabel, Switch } from '@mui/material'
import React,{useState} from 'react'

const MuiSwitch = () => {
  const [state, setState] = useState(false);
  console.log(state);
  const handleChange = (e)=>{
    setState(e.target.checked);
  }
  return (
    <Box>
        <FormControlLabel label='dark mode' control={<Switch checked={state} size='large' color='success' onChange={handleChange}></Switch>}></FormControlLabel>
    </Box>
  )
}

export default MuiSwitch