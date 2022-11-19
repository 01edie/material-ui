import { Box,Stack, styled } from "@mui/material";
import React from "react";

//5 break points
//

// const StyledBox = styled(Box)((theme)=>({height:'250px',width:'250px',bgcolor:theme.status.danger}))
const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          bgcolor: "success.main",
          marginBottom:'20px'
        }}
      ></Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box
        sx={{
          height: "100px",
          width: '100px',
          bgcolor: "secondary.main",
        }}
      ></Box>
        <Box
        sx={{
          height: "100px",
          width: '100px',
          bgcolor: "secondary.light",
        }}
      ></Box>
        <Box
        sx={{
          height: "100px",
          width: '100px',
          bgcolor: "red",
        }}
      ></Box>
      {/* <StyledBox/> */}
      </Stack>
    </>
  );
};

export default MuiResponsiveness;
