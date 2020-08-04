import "./ListCards.scss";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { cartActions } from "../../../../store/actions/cart";

function ListCards({ selectedCategory, categories }) {
  const dispatch = useDispatch();

  const { itens, qtdItens, total } = useSelector((state) => state.cart);

  const listCategorySelected = categories?.find((category) => {
    return selectedCategory === category.id;
  });

  function removeItem(itemRemoved, qtdToRemoved) {
    const itemToRemove = itens.find((item) => {
      return item.id === itemRemoved.id;
    });

    if (itemToRemove) {
      dispatch(
        cartActions.removeItemCart({
          total,
          qtdItens,
          itens,
          itemRemoved: itemToRemove,
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

  function increment(id) {
    const item = itens?.find((item) => {
      return item.id === id;
    });

    const newQtd = item ? item.qtd : 0;

    return newQtd;
  }

  return (
    <Container className="container-list-cards">
      <Grid container spacing={2} justify="flex-start" alignItems="center">
        {listCategorySelected?.items?.map((item) => {
          const { name, id, description, image, unit_price } = item;

          return (
            <Grid container item xs={12} md={3} key={id}>
              <Card>
                <CardActionArea>
                  <CardMedia className="content-image" title="Image do produto">
                    <img
                      src={image}
                      className="product-image"
                      alt={`Imagem do produto: ${name}`}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description ? description : "Sem descrição"}
                    </Typography>
                    <Typography>R$ {unit_price}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="content-actions-card">
                  <IconButton onClick={() => removeItem(item, 1)}>
                    <RemoveIcon />
                  </IconButton>

                  <Typography align="center">{increment(id)}</Typography>

                  <IconButton onClick={() => addItemCart(item, 1)}>
                    <AddIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ListCards;
