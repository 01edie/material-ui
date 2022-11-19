import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

//step1: import Localization provider like context and pass AdapterDateFns to dateAdapter
//date library and date adapters
// date-fns and @date-io/date-fns
const MuiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);
  return (
    <Stack spacing={4} width={250}>
      <DatePicker
        label="date picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue)=>{
            setSelectedDate(newValue);
        }}
      ></DatePicker>
    </Stack>
  );
};

export default MuiDatePicker;
