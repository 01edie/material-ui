import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'


// type of secondary navigation scheme that reveals the user's website location in page
//react-router,it will take back to hierarchy
//props: separator(also accepts icon), maxItems(by default 8items), itemsAfterCollapse, itemsBeforeCollapse

const MuiBreadcrumbs = () => {
  return (
    <Box m={4}>
        <Breadcrumbs aria-label='breadcrunb' separator='->' maxItems={3} itemsBeforeCollapse={2}>
            <Link href='#'>hier1</Link>
            <Link href='#'>hier2</Link>
            <Link href='#'>hier3</Link>
            <Typography>456</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs