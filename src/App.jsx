import React from "react";
import "./App.css";
import HelloWorld from "./assets/HelloWorld";
import Greeting from "./assets/Greeting";
import ClickCounter from "./assets/Counter";
import Logger from "./assets/Logger";

function App() {
  return (
    <>
      <HelloWorld />
      <Greeting name="Joanny" />
      <ClickCounter />
      <Logger />
    </>
  );
}

export default App;
