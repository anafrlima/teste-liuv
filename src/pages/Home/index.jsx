import "./Home.scss";

import React from "react";
import Container from "@material-ui/core/Container";

import BottomResumeCart from "../../components/BottomResumeCart";
import logo from "../../static/images/logo.png";

import { createMuiTheme } from "@material-ui/core/styles";

function Home() {
  return (
    <Container>
      <div className="home-header">
        <div className="content-logo">
          <img src={logo} alt="" className="logo" />
        </div>
        <BottomResumeCart />
      </div>
    </Container>
  );
}

export default Home;
