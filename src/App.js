import React from "react";

import Main from "./containers/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
