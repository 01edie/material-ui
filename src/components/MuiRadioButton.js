import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import React,{useState} from 'react'
const MuiRadioButton = () => {
    const [state, setState] = useState('');
    console.log(state);
  return (
    <Box>
        <FormControl error>
            <FormLabel id='experience-goup'>
                Years of experience: 
            </FormLabel>
            <RadioGroup name='experience-group' value={state} onChange={(e)=>{setState(e.target.value)}} row >
                <FormControlLabel control={<Radio color='secondary' size='small'></Radio>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio></Radio>} label='2-4' value='2-4'/>
                <FormControlLabel control={<Radio></Radio>} label='4-6' value='4-6'/>
                <FormControlLabel control={<Radio></Radio>} label='6-8' value='6-8'/>
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>

    </Box>

  )
}

export default MuiRadioButton