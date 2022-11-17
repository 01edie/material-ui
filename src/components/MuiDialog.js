import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

//Dialog is a type of modal that appears infront of app content to ask for a decision or provide imp info
// it disables all the app functionality and remain on screen until confirmed or dismissed, interruptive
// dialogs can be before api call, contents can be form, list of items etc based on project
const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClose={()=>setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? you will not be able to
            edit after submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant='outlined' autoFocus onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
