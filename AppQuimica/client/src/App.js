import React from "react";
import Landing from "./containers/landing/Landing";
import GlobalFonts from "./assets/fonts/fonts";
import ScatterChart from "./components/ScatterChart";
import "./App.css";

const App = () => {
  return (
    <>
      <GlobalFonts />
      <Landing />
      {/*<ScatterChart></ScatterChart> */}
    </>
  );
};

export default App;
