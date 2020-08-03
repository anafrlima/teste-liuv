import React from "react";
import Home from "./pages/Home";

import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default connect()(App);
