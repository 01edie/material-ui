import { Stack } from '@mui/material'
import React from 'react'
import {LoadingButton} from '@mui/lab'
import { Save } from '@mui/icons-material'

//async operations buttons
//props: loading, loadingPosition, loadingIndicator, startIcon

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>

        <LoadingButton   variant='outlined'>Fetch Data</LoadingButton>
        <LoadingButton loading loadingIndicator='Fetching...' variant='outlined'>Fetch Data</LoadingButton>

        <LoadingButton variant='outlined' loadingPosition='start' startIcon={<Save/>}>Save</LoadingButton>
        <LoadingButton variant='outlined' loading loadingPosition='start' startIcon={<Save/>}>Save</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton