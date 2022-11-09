import "./App.css";
import Login from "./Components/Login/Login";
import NavbarMenu from "./Components/Navbar/Navbar";
import axios from "axios";
import React, { useState } from "react";
import { ApiClient } from "./Components/ApiClient";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  };

  const login = (authToken) => {
    window.localStorage.setItem("token", authToken);
    changeToken(authToken);
  };

  return (
    <>
      <NavbarMenu />
      <Login />
      <Dashboard client={client} />
    </>
  );
};

export default App;
