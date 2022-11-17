import React from "react";
import "./App.css";
// import MuiButton from './components/MuiButton'
// import ToggleButton from './components/MuiToggleButton'
// import MuiTypography from './components/MuiTypography'
// import MuiTextField from './components/MuiTextField'
// import MuiSelect from './components/MuiSelect'
// import MuiRadioButton from './components/MuiRadioButton'
// import MuiCheckBox from './components/MuiCheckBox'
// import MuiLayout from './components/MuiLayout'
// import MuiCard from './components/MuiCard'

// import AxiosTest from './components/AxiosTest'
// import MuiSwitch from './components/MuiSwitch'
// import MuiRating from "./components/MuiRating";
// import MuiAutoCmplete from "./components/MuiAutoCmplete";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiImageList from "./components/MuiImageList";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiLink from "./components/MuiLink";
// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBadge from "./components/MuiBadge";
// import MuiList from "./components/MuiList";
// import MuiChip from "./components/MuiChip";
// import MuiTooltip from "./MuiTooltip";
// import MuiTable from "./components/MuiTable";
// import MuiAlert from "./components/MuiAlert";
// import MuiSnackBar from "./components/MuiSnackBar";
// import MuiDialog from "./components/MuiDialog";
// import MuiProgress from "./components/MuiProgress";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import { LocalizationProvider } from "@mui/lab";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MuiDatePicker from "./components/MuiDatePicker";











const App = () => {
  return (
    <LocalizationProvider className="App" dateAdapter={AdapterDayjs}>
      {/* <MuiTypography/> */}
      {/* <MuiButton></MuiButton> */}
      {/* <ToggleButton></ToggleButton> */}
      {/* <MuiTextField></MuiTextField> */}
      {/* <MuiRadioButton></MuiRadioButton> */}
      {/* <MuiCheckBox></MuiCheckBox> */}
      {/* <MuiLayout></MuiLayout> */}
      {/* <MuiCard></MuiCard> */}

      {/* <AxiosTest/> */}
      {/* <MuiSwitch></MuiSwitch> */}
      {/* <MuiRating /> */}
      {/* <MuiAutoCmplete/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList /> */}

      {/* navigation related component -------------------------*/}
      {/* <MuiNavbar/> */}
      {/* <MuiLink /> */}
      {/* <MuiBreadcrumbs/> */}

      {/* <MuiDrawer/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}

      {/* data display components -----------------------------*/}
      {/* <MuiAvatar /> */}
      {/* <MuiBadge/> */}
      {/* <MuiList/> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiTable/> */}
      {/* feedback related components ------------------------------ */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackBar/> */}
      {/* <MuiDialog/> */}
              {/* progress related  components */}
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}


      {/* lab components ----------------------------------------------------*/}
      {/* <MuiLoadingButton/> */}
      <MuiDatePicker/>





    </LocalizationProvider>
  );
};

export default App;
