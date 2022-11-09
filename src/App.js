import "./App.css";
import Login from "./Components/Login/Login";
import NavbarMenu from "./Components/Navbar/Navbar";
import axios from "axios";
import React, { useState } from "react";

function App() {
  //define the data
  const [data, setData] = useState([{}]);
  //api key
  const apiKey =
    "vXL6HTXYXNXPf26veBJryq7QIHIMGzn8JxM8fZvwdcIpPMm1BKBHRC9MdAFbyNog";

  // get api request
  const fetchEvents = (event) => {
    axios
      .get("https://data.mongodb-api.com/app/data-xxmxo/endpoint/data/v1")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    mongodb.then(response);
  };

  return (
    <>
      <NavbarMenu />
      <Login />
    </>
  );
}

export default App;
