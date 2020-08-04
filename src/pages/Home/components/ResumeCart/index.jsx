import React from "react";
import { useSelector } from "react-redux";
import ResumeCartDialog from "../../../../components/ResumeCartDialog";
import { Grid, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

function ResumeCart() {
  const { qtdItens, itens } = useSelector((state) => state.cart);

  return (
    <ResumeCartDialog>
      <Grid container spacing={2}>
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
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={1}>
                  <Typography align="center">2</Typography>
                </Grid>

                <Grid item xs={1}>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={4}>
                  <Typography align="center">Fanta</Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography align="center">R$ 10,00</Typography>
                </Grid>

                <Grid item xs={1}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-start" alignItems="center" spacing={1}>
            <Grid item xs={6}>
              <Typography>Quantidade de itens</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">{qtdItens}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ResumeCartDialog>
  );
}

export default ResumeCart;
