import { Stack, CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'



const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        {/* //indeterminate progress */}
        <CircularProgress></CircularProgress>
        <CircularProgress color='success'></CircularProgress>

        {/* determinate */}
        <CircularProgress variant='determinate' value={49}  color='warning'></CircularProgress>


        {/* ?linear progress components */}
         {/* //indeterminate progress */}
         <LinearProgress></LinearProgress>
        <LinearProgress color='success'></LinearProgress>

        {/* determinate */}
        <LinearProgress variant='determinate' value={49}  color='secondary'></LinearProgress>
    </Stack>
  )
}

export default MuiProgress