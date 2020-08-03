import "./BottomResumeCart.scss";

import React from "react";
import { useDispatch } from "react-redux";
import { Badge, Typography, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import types from "../../constants";

function BottomResumeCart() {
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch({ type: types.CLOSE_DIALOG, open: true });
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
    </>
  );
}

export default BottomResumeCart;
