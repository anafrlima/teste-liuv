import "./BottomResumeCart.scss";

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Badge, Typography, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ResumeCartDialog from "../ResumeCartDialog";

function BottomResumeCart() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="content-bottom-cart">
        <Badge color="secondary" badgeContent="3">
          <IconButton
            variant="contained"
            className="btn-cart"
            onClick={handleClickOpen}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Badge>

        <Typography variant="subtitle1" className="value-checkout">
          R$ 10,00
        </Typography>
      </div>

      <ResumeCartDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default BottomResumeCart;
