import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Dialog } from "@material-ui/core";

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
