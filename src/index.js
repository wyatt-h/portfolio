import React from "react";
import reactDOM from "react-dom";
import LandingPage from "./components/LandingPage";
import GlobalStyle from "./style/GlobalStyle.styled";

const App = () => {
  return (
    <GlobalStyle>
      <LandingPage />
    </GlobalStyle>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
