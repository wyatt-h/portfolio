import React from "react";
import reactDOM from "react-dom";
import LandingPage from "./components/LandingPage";
import GlobalStyle from "./style/GlobalStyle.styled";
import Link from "./components/LandingPage/Link";

const App = () => {
  return (
    <GlobalStyle>
      <LandingPage />
      <Link />
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
