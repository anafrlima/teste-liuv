import React from "react";
import ResumeCartDialog from "../../../../components/ResumeCartDialog";

function ResumeCartContent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ResumeCartDialog>
      <div>dentro do dialog</div>
    </ResumeCartDialog>
  );
}
