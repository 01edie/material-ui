import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  //if same star rating gets selected , null will be passed and it will be reset
  //props: precison, icon, emptyIcon, in icon (fontSize,color), readOnly and value, highlightedSelectedOnly
  //highlightSelecteOnly is suitable for collecting rating using emojis like last icon is smiling icon
  const handler = (e, v) => {
    setValue(v);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handler}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color='success' />}
        emptyIcon={<FavoriteBorder fontSize='inherit' />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
