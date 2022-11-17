import { Face } from "@mui/icons-material";
import { Stack, Chip, Avatar } from "@mui/material";
import React from "react";

//chip allow users to enter information, make selections, filter content or trigger actions
// showcasing tags on a blogpost
// props: color, size, avatar,icon

// by default it is read only . however it can changed by onClick, there is onDelete
const MuiChip = () => {
  const [chips, setChips] = React.useState(["chip 1", "chip 2", "chip 3"]);
  console.log(chips);
  const handleDelete = (deleteItem)=>{
    const newChips = chips.filter((item)=>item!==deleteItem);
    setChips(newChips);
  }
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="chip" color="primary" size="small"></Chip>
        <Chip label="chip" color="primary" size="large" icon={<Face />}></Chip>
        <Chip
          label="chip-outline"
          color="secondary"
          variant="outlined"
          size="small"
        ></Chip>
        <Chip
          label="chip"
          variant="outlined"
          color="primary"
          size="large"
          avatar={<Avatar>D</Avatar>}
        ></Chip>

        <Chip
          label="Click"
          color="success"
          size="large"
          onClick={() => {
            alert("clicked");
          }}
          onDelete={() => {
            alert("deleted");
          }}
          icon={<Face />}
        ></Chip>
      </Stack>
      <Stack direction='row'my={3} spacing={2}>{chips.map((item, index) => {
        return (<Chip key={index} label={item} variant='outlined' color='success' onDelete={()=>{handleDelete(item)}}></Chip>)
      })}</Stack>
      <p>djfk</p>
    </>
  );
};

export default MuiChip;
