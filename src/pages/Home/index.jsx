import "./Home.scss";

import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";

import BottomResumeCart from "../../components/ButtonResumeCart";
import ResumeCart from "./components/ResumeCart";
import logo from "../../static/images/logo.png";
import { useDispatch } from "react-redux";
import { menuActions } from "../../store/actions/menu";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getList() {
    dispatch(menuActions.getMenu);
  }

  return (
    <Container>
      <div className="home-header">
        <div className="content-logo">
          <img src={logo} alt="" className="logo" />
        </div>
        <BottomResumeCart />
      </div>

      <ResumeCart />
    </Container>
  );
}

export default Home;
