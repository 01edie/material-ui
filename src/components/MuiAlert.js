import { Check } from '@mui/icons-material'
import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import React from 'react'


// alert displays short imp msg  in a way attracting user's attention without interrupting user's task
// prop: severity ,variant, icon
//AlertTitle
const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='success'> This is success alert</Alert>
        <Alert severity='warning'>This is warning alert</Alert>
        <Alert severity='error'>This is error alert</Alert>
        <Alert severity='info'>This is info alert</Alert>
   

        <Alert severity='success' variant='outlined'> This is success alert</Alert>
        <Alert severity='warning' variant='outlined'>This is warning alert</Alert>
        <Alert severity='error' variant='outlined'>This is error alert</Alert>
        <Alert severity='info' variant='outlined'>This is info alert</Alert>

        <Alert severity='success' variant='filled' icon={<Check fontSize='inherit'/>} onClose={()=>alert('closed')}
        action={<Button color='inherit' size='small'>Undo</Button>}
        >
            <AlertTitle>Success</AlertTitle>
             This is success alert</Alert>
        
        <Alert severity='warning' variant='filled'>
            <AlertTitle>Warning</AlertTitle>
            This is warning alert</Alert>
        

        <Alert severity='error' variant='filled'>
            <AlertTitle>Error</AlertTitle>
            This is error alert</Alert>
        

        <Alert severity='info' variant='filled'>
            <AlertTitle>Info</AlertTitle>
            This is info alert</Alert>
        

    </Stack>
  )
}

export default MuiAlert