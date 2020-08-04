import "./Home.scss";

import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";

import BottomResumeCart from "../../components/ButtonResumeCart";
import ResumeCart from "./components/ResumeCart";
import ListCards from "./components/ListCards";

import logo from "../../static/images/logo.png";

import { menuActions } from "../../store/actions/menu";
import getCategories from "../../services";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@material-ui/core";
import { useState } from "react";

function Home() {
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(1);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.menu);

  async function getList() {
    const categories = await getCategories();
    dispatch(menuActions.getMenu({ categories }));
  }

  return (
    <Container>
      <div className="home-header">
        <div className="content-logo">
          <img src={logo} alt="" className="logo" />
        </div>
        <BottomResumeCart />
      </div>

      <Grid container spacing={2} style={{ paddingTop: "40px" }}>
        {categories
          ? categories.map((item) => {
              return (
                <Grid item md={4} xs={12} key={item?.id}>
                  <Card>
                    <CardActionArea
                      onClick={() => setSelectedCategory(item?.id)}
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          align="center"
                        >
                          {item?.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })
          : null}
      </Grid>

      <ListCards selectedCategory={selectedCategory} categories={categories} />

      <ResumeCart />
    </Container>
  );
}

export default Home;
