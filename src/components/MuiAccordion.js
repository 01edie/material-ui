import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

// wrapper component(accordion),
//AccordionSummary - props - > id, expandIcon, aria-controls(for accessibility)

// accordion group -> can be like 3 accordion components
// default behavior should be one accordion should be expanded at one time
// expand prop like expanded={expanded==='panel1'} and onChange like onChange={(e,isExpanded)=>{handleChange(isExpanded,'panel1')}}
const MuiAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box >
      
      <Accordion sx={{color:'secondary.main'}}
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel1");
        }}
        
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
          sx={{color:'primary.main'}}
        >
          <Typography>accordion one</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            adipisci praesentium eius, earum atque consequatur asperiores quae?
            Iste aliquam recusandae numquam aut ducimus animi quod sint maxime
            beatae magnam modi excepturi aperiam distinctio corrupti et sapiente
            quos laborum, quae neque? Molestiae dicta reiciendis harum sunt
            asperiores fuga minus quas officia!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel2");
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>accordion two</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'warning.main'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            adipisci praesentium eius, earum atque consequatur asperiores quae?
            Iste aliquam recusandae numquam aut ducimus animi quod sint maxime
            beatae magnam modi excepturi aperiam distinctio corrupti et sapiente
            quos laborum, quae neque? Molestiae dicta reiciendis harum sunt
            asperiores fuga minus quas officia!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel3");
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>accordion three</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            adipisci praesentium eius, earum atque consequatur asperiores quae?
            Iste aliquam recusandae numquam aut ducimus animi quod sint maxime
            beatae magnam modi excepturi aperiam distinctio corrupti et sapiente
            quos laborum, quae neque? Molestiae dicta reiciendis harum sunt
            asperiores fuga minus quas officia!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
