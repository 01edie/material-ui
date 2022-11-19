import { Star } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import React, { useState } from "react";


//tabs make it easy to explore and switch between views
//props: TabList: indicatorColor, textColor to change color, centered
// variant='scrollable, scrollButtons= 'auto'
// Tab props: icon, disabled, variant
const MuiTab = () => {
  const [val, setVal] = useState("1");
  const handleChange = (e, v) => {
    setVal(v);
  };
  return (
    <Box>
      <TabContext value={val}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="tab 1" value="1" icon={<Star/>} iconPosition='start'></Tab>
            <Tab label="tab 2" value="2"></Tab>
            <Tab label="tab 3" value="3" disabled></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">panel 1</TabPanel>
        <TabPanel value="2">panel 2</TabPanel>
        <TabPanel value="3">panel 3</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTab;
