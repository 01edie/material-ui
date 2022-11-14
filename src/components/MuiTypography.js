import React from "react";
import { Typography } from "@mui/material";
const MuiTypography = () => {
  console.log(1);
  return (
    <div>
      <Typography variant="h1" > h1 heading </Typography>
      <Typography variant="h2"> h2 heading </Typography>
      <Typography variant="h3"> h3 heading </Typography>
      <Typography variant="h4" component='h1' gutterBottom> h4 heading </Typography>
      <Typography variant="h5"> h5 heading </Typography>
      <Typography variant="h6"> h6 heading </Typography>


      <Typography variant="subtitle1"> subtitle1 </Typography>
      <Typography variant="subtitle2"> subtitle2 </Typography>

{/* body text or paragraph */}
{/* body1 16px default value */}
{/* can be changed in theme and customisation */}
      <Typography variant="body1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat velit magnam omnis iste, voluptate nobis eius corporis distinctio cumque repellendus, rem reiciendis blanditiis nesciunt labore amet voluptatem ad porro eligendi nostrum dolorem veritatis suscipit temporibus accusamus! Perspiciatis quibusdam nostrum tempora repellendus dolor, in sapiente ab, consequatur vitae, necessitatibus excepturi! </Typography>
      <Typography variant="body2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi quod est quibusdam ipsum labore non eveniet optio beatae ad veritatis consequuntur inventore, doloremque libero numquam ut amet asperiores officia! </Typography>
    </div>
  );
};

export default MuiTypography;
