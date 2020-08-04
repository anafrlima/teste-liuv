import "./BottomResumeCart.scss";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Typography, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import types from "../../constants";

function BottomResumeCart() {
  const dispatch = useDispatch();

  const { total, qtdItens } = useSelector((state) => state.cart);

  const handleClickOpen = () => {
    dispatch({ type: types.CLOSE_DIALOG, open: true });
  };

  return (
    <>
      <div className="content-bottom-cart">
        <Badge color="secondary" badgeContent={qtdItens}>
          <IconButton
            variant="contained"
            className="btn-cart"
            onClick={handleClickOpen}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Badge>

        <Typography variant="subtitle1" className="value-checkout">
          R$ {total ? total : "0"}
        </Typography>
      </div>
    </>
  );
}

export default BottomResumeCart;
