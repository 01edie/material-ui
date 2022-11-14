import { Box,TextField, MenuItem } from '@mui/material'
import React,{useState} from 'react'


const MuiSelect = () => {
    const [country, setCountry] = useState([]);
    console.log(country);
    const handler = (e) =>{
      const value = e.target.value;
      console.log('value',value);
      console.log(typeof(value)==='string');
        setCountry(value);
    }
    //practical usage list of dropdown option from api and populate options
  return (
    <Box width='250px'>
        <TextField label='select country' value={country} SelectProps={{multiple:true}} color='success' select onChange={handler} fullWidth>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='UK'>UK</MenuItem>
            <MenuItem value='JP'>Japan</MenuItem>
        </TextField>

    </Box>
  )
}

export default MuiSelect