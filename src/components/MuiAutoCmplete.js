import { Stack, Autocomplete, TextField } from "@mui/material";
import React from "react";
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skills1 = skills.map((item, index)=>{
    return {id: index+1, label:item}
})
// props: two mandatory prop - options(values), renderInput(arrow func return TextField )
// to allow free string=> freeSolo
//this component can accept array of strings or array of objects having a label key(this one is used in more practical usage)
const MuiAutoCmplete = () => {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);
//   console.log(value);
  console.log(value1);
  return (
    <Stack width="250px" spacing={2}>
      <Autocomplete
        value={value}
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        onChange={(e,v)=>setValue(v)}
        freeSolo
      ></Autocomplete>

<Autocomplete
        value={value}
        options={skills1}
        renderInput={(params) => <TextField {...params} label="skills1" />}
        onChange={(e,v)=>setValue1(v)}
        // freeSolo
      ></Autocomplete>
    </Stack>
  );
};

export default MuiAutoCmplete;
