import React from "react";
import { Slide, Dialog } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ResumeCartDialog({ open, handleClose, children }) {
  return (
    <Dialog
      TransitionComponent={Transition}
      dividers={"paper"}
      open={open}
      onClose={handleClose}
    >
      {children}
    </Dialog>
  );
}

export default ResumeCartDialog;
