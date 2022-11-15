import { Stack, ImageList, ImageListItem, Box  } from '@mui/material'
import React from 'react'
import { itemData, itemData2, itemData3 } from './data'



const MuiImageList = () => {
  return (
    <Stack spacing={4} >
        <Box >
        {/* basic imageGrid , there are two more variants */}

        <ImageList sx={{width:500, height:450}} cols={3} rowHeight={162}>
            {itemData.map((item)=>(<ImageListItem  key={item.img}>
                <img src={`${item.img}`} width='162px' height='162px' alt={item.title} loading='lazy'/>
            </ImageListItem>))}
        </ImageList>
        </Box>
        <ImageList variant='woven' sx={{width:500, height:450}} cols={3} gap={10}>
            {itemData2.map((item)=>(<ImageListItem  key={item.img}>
                <img src={`${item.img}`} width='162px' height='162px' alt={item.title} loading='lazy'/>
            </ImageListItem>))}
        </ImageList>
        <Box sx={{width:500, height:450, overflowY:'scroll'}}>
        <ImageList variant='masonry'  cols={3} gap={8}>
            {itemData3.map((item)=>(<ImageListItem  key={item.img}>
                <img src={`${item.img}`} width='162px' alt={item.title} loading='lazy'/>
            </ImageListItem>))}
        </ImageList>
        </Box>
    </Stack>
  )
}

export default MuiImageList