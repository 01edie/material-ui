import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import React from "react";

// Box
//it is used as a replacement of a div tag, wrapper component
//for section and article symantic there is component prop
// it accept a prop sx which can be defined to access the theme
// css utility component => it supports mui system properties => css properties as prop directly in component
//layout related component

// Stack
//is used to amnage layout one dimension , vertical|horizontal
// by default stack is display:flex and flex-direction='column'
//spacing also get multiplied by 8(px)

// Grid
// 2 dimensional and responsive layout
// Grid Container and Grid Item
// flexbox module
//12 cols, each item width -1 or more col
//5 breakpoints- xs-mobile, sm-tablet, md-desktop, lg and xl - larger monitors
//-we can assign integer values to each breakpoint for responsiveness
// size and above order


// paper component
//surface related component
//in creating layout and visual hierarchy
//signup or contact form => common ui is to put it in card and provide some elevation and shadow
//provides white background
// sections of ui and also visual hierarchy
//used under the hood card component
const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
      <Stack
        direction="row-reverse"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ border: "1px solid" }}
      >
        <Box
          component="article"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
            },
          }}
        >
          Abc
        </Box>
        {/* there is some shorter name for few props / bgcolor,p(by default it is multplied by 8, unit px) */}
        {/* css properties https://mui.com/system/properties/ */}
        <Box
          display="flex"
          height="100px"
          width="150px"
          bgcolor="success.light"
          p={2}
        >
          zyx
        </Box>
      </Stack>
      <Grid container my={4}>
        <Grid item xs={12}  sm={9} md={6}><Box bgcolor='secondary.light'  p={2}>item 1</Box></Grid>
        <Grid item xs={12} sm={9} md={6}><Box bgcolor='primary.light'  p={2}>item 2</Box></Grid>
        <Grid item xs={12} sm={9} md={6}><Box bgcolor='success.light' p={2}>item 3</Box></Grid>
        <Grid item xs={12} sm={9} md={6}><Box bgcolor='warning.light' p={2}>item 4</Box></Grid>
      </Grid>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}><Box bgcolor='secondary.light'  p={2}>item 1</Box></Grid>
        <Grid item xs><Box bgcolor='primary.light'  p={2}>item 2</Box></Grid>
        <Grid item xs><Box bgcolor='success.light' p={2}>item 3</Box></Grid>
        <Grid item xs='auto'><Box bgcolor='warning.light' p={2}>item 4</Box></Grid>
      </Grid>
      <Grid container my={4}>
        <Grid item xs={4}><Box bgcolor='secondary.light'  p={2}>item 1</Box></Grid>
        <Grid item xs={8}><Box bgcolor='primary.light'  p={2}>item 2</Box></Grid>
        <Grid item xs={9}><Box bgcolor='success.light' p={2}>item 3</Box></Grid>
        <Grid item xs={3}><Box bgcolor='warning.light' p={2}>item 4</Box></Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
