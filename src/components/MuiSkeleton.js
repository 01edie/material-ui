import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import React,{useState, useEffect} from "react";


// used to display a placeholder preview of the content before data gets loaded to reduce loadtime frustration
const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[])
  return (<Box width={250}>
    {
        loading?(
            <Skeleton variant='rectangular' width={256} height={144} animation='wave'></Skeleton>
        ): <img src='https://source.unsplash.com/random/256x144'  alt='skl' width={256} height={144}></img>
    }
    <Stack direction='row' spacing={1} sx={{width:'100%', marginTop:'12px'}}>
        {
        loading?(<Skeleton variant='circular' width={40} height={40} />):<Avatar>Y</Avatar>
        }
    </Stack>
    <Stack  sx={{width:'80%'}}>
        {
        loading?(<>
        <Typography variant='body1'><Skeleton width='100%'/></Typography>
        <Typography variant='body2'><Skeleton width='100%'/></Typography>
        </>):<Typography variant='text'>React Mui tutorial</Typography>
        }
    </Stack>
  </Box>)
};

export default MuiSkeleton;


{/* <Stack spacing={1} width='250px'>
    <Skeleton variant='text'></Skeleton>

     suitable for avatar 
    <Skeleton variant='circular' width={40} height={40}></Skeleton>
    <Skeleton variant='rectangular' width={250} height={125}></Skeleton>
    <Skeleton variant='rectangular' width={250} height={125} animation='pulse'></Skeleton>
    <Skeleton variant='rectangular' width={250} height={125} animation='wave'></Skeleton>
    <Skeleton variant='rectangular' width={250} height={125} animation={false}></Skeleton>
  </Stack> */}