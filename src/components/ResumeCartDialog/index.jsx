import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Dialog, DialogContent } from "@material-ui/core";

import types from "../../constants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ResumeCartDialog({ children }) {
  const dispatch = useDispatch();

  const { open } = useSelector((state) => state.dialog);

  function handleClose() {
    dispatch({ type: types.CLOSE_DIALOG, open: false });
  }

  return (
    <Dialog
      fullWidth={true}
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default ResumeCartDialog;
