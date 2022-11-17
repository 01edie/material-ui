import { Stack, Link, Typography } from '@mui/material'
import React from 'react'


// anchor tag
//props: color, underline
// apart from being stand alone link , usage is BreadCrumbs comp
const MuiLink = () => {
  return (
    <Stack direction='row' spacing={2} m={4}>
        <Link href='#'>LinkSample</Link>
        <Link href='#' color='secondary' underline='hover'>LinkSample</Link>
        <Link href='#' color='secondary' sx={{'&:hover':{color:'primary.main'}}} underline='none'>LinkSample</Link>


        <Typography variant='h6'>
        <Link href='#'>LinkSampleT</Link>
        </Typography>
        <Link href='#' variant='h6'>LinkSample</Link>
        <Link href='#' variant='h2'>LinkSample</Link>

    </Stack>
  )
}

export default MuiLink