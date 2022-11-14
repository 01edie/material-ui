import React,{useState} from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
const MuiTextField = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
        <TextField label='Name'></TextField>
        {/* 3 variants , outlined is default variant- outlined, filled, standard */}
        <TextField label='Name' variant='filled'></TextField>
        <TextField label='Name' variant='outlined'></TextField>
        <TextField label='Name' variant='outlined' helperText='do not share value'></TextField>
        <TextField label='Name' variant='standard' size='small' color='success' required></TextField>

        </Stack>
        <Stack direction='row' spacing={2}>
       
        <TextField label='Name'  InputProps={{readOnly:true}} variant='standard'></TextField>
        <TextField label='password' variant='outlined' value='abc' type='password' disabled></TextField>
        

        </Stack>

        <Stack direction='row' spacing={2}>
       
        <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}  variant='standard'></TextField>
        <TextField label='Weight' variant='outlined'  InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}></TextField>
        

        </Stack>


        <Stack direction='row' spacing={2}>
       
        <TextField label='Name'  value={value} variant='standard' error={!value} onChange={(e)=>setValue(e.target.value)} helperText={!value?'required':'do not share'}></TextField>
        
        

        </Stack>
    </Stack>
  )
}

export default MuiTextField