import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import React, { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props}></Alert>;
});

//provide brief notification(toast)
// temp towards bottom of the screen

//props: open, onCLose, anchorOrigin, autoHideDuration, message
const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="outlined"
      >
        Submit
      </Button>
      {/* <Snackbar
        message="button clicked successfully"
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      ></Snackbar> */}

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarAlert onClose={handleClose} severity="success">
          {" "}
          clicked successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackBar;
