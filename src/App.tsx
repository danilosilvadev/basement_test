import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesStack } from "./config/router/routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesStack />
    </BrowserRouter>
  );
}

export default App;
