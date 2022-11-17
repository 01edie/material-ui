import { Delete } from '@mui/icons-material'
import { Tooltip, IconButton } from '@mui/material'
import React from 'react'



//informative text when users hover over, tap or focus on=> specially for icons
//props: title, placement, arrow, enterDelay, leaveDelay
const MuiTooltip = () => { 
  return (
    <Tooltip title='delete' placement='right-start' arrow enterDelay={1000} leaveDelay={200}><IconButton>
      <Delete/></IconButton></Tooltip>
  )
}

export default MuiTooltip