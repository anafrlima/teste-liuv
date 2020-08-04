import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ResumeCartDialog from "../../../../components/ResumeCartDialog";
import { Grid, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { cartActions } from "../../../../store/actions/cart";

function ResumeCart() {
  const dispatch = useDispatch();

  const { qtdItens, itens, total } = useSelector((state) => state.cart);

  function removeItem(itemRemoved, qtdToRemoved) {
    if (qtdItens > 0) {
      dispatch(
        cartActions.removeItemCart({
          total,
          qtdItens,
          itens,
          itemRemoved,
          qtdToRemoved,
        })
      );
    }
  }

  function addItemCart(itemAdded, qtdToAdded) {
    dispatch(
      cartActions.addItemCart({
        total,
        qtdItens,
        itens,
        itemAdded,
        qtdToAdded,
      })
    );
  }

  return (
    <ResumeCartDialog>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {itens?.map((item, index) => {
            return (
              <Grid
                container
                justify="flex-start"
                alignItems="center"
                spacing={1}
                key={index}
              >
                <Grid item xs={1}>
                  <IconButton onClick={() => removeItem(item, 1)}>
                    <RemoveIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={1}>
                  <Typography align="center">{item.qtd}</Typography>
                </Grid>

                <Grid item xs={1}>
                  <IconButton onClick={() => addItemCart(item, 1)}>
                    <AddIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={4}>
                  <Typography align="center">{item.name}</Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography align="center">R$ {item.unit_price}</Typography>
                </Grid>

                <Grid item xs={1}>
                  <IconButton onClick={() => removeItem(item, item.qtd)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-start" alignItems="center" spacing={5}>
            <Grid item xs={6}>
              <Typography>Quantidade de itens</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">{qtdItens ?? 0}</Typography>
            </Grid>
          </Grid>
          <Grid container justify="flex-start" alignItems="center" spacing={5}>
            <Grid item xs={6}>
              <Typography>Total</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">R$ {total ?? 0}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ResumeCartDialog>
  );
}

export default ResumeCart;
