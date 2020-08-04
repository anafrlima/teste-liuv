import "./ListCards.scss";

import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  Grid,
} from "@material-ui/core";

function ListCards({ selectedCategory, categories }) {
  const listCategorySelected = categories?.find((category) => {
    return selectedCategory === category.id;
  });

  console.log(listCategorySelected);

  return (
    <Container className="container-list-cards">
      <Grid container spacing={2} justify="flex-start" alignItems="center">
        {listCategorySelected?.items?.map(
          ({ name, id, description, image, unit_price }) => {
            return (
              <Grid container item xs={12} md={3} key={id}>
                <Card>
                  <CardActionArea>
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
                    </CardContent>
                  </CardActionArea>

                  <CardActions>
                    <Button size="small" color="primary">
                      Comprar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        )}
      </Grid>
    </Container>
  );
}

export default ListCards;
