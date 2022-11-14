import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import React,{useState} from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

<Box></Box>
const MuiCheckBox = () => {
    const [state, setstate] = useState(false);
    const [skills,setSkills] = useState([]);
    console.log({skills});
    const handleSkillChange =(e)=>{
      const index= skills.indexOf(e.target.value);
      if(index===-1){
        setSkills([...skills, e.target.value]);
      }else{
        setSkills(skills.filter((skill)=>skill!==e.target.value))
      }
    }
    console.log(state)
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept the terms' control={<Checkbox checked={state} onChange={(e)=>setstate(e.target.checked)}></Checkbox>} />
        </Box>
        <Box>
          <Checkbox icon={<BookmarkBorderIcon></BookmarkBorderIcon>} checkedIcon={<BookmarkIcon></BookmarkIcon>}  checked={state} onChange={(e)=>setstate(e.target.checked)} ></Checkbox>
        </Box>

        <Box>
          <FormControl error>
            <FormLabel>
              SKills: 
            </FormLabel>
            <FormGroup row >
            <FormControlLabel label='HTML' value='html' control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange}></Checkbox>} />
            <FormControlLabel label='CSS' value='css' control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}></Checkbox>} />
            <FormControlLabel label='JS' value='js' control={<Checkbox checked={skills.includes('js')} onChange={handleSkillChange}></Checkbox>} />

            </FormGroup>
            <FormHelperText>invalid</FormHelperText>
          </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckBox