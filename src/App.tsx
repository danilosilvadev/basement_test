import { UserProvider } from "./config/context/UserProvider";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesStack } from "./config/router/routes";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <RoutesStack />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
