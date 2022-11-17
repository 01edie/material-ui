import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

//navigation related comp.
//best suited for mobile and tablet width
// used to switch to primary destination

//props: showLabels
//action el props: icon, label
const MuiBottomNavigation = () => {
  const [val, setVal] = React.useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={val}
      onChange={(e, v) => setVal(v)}
      showLabels
    >
      <BottomNavigationAction
        icon={<Home />}
        label="Home"
      ></BottomNavigationAction>
      <BottomNavigationAction
        icon={<Favorite />}
        label="Favorites"
      ></BottomNavigationAction>
      <BottomNavigationAction
        icon={<Person />}
        label="Profile"
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
