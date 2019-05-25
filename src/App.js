import React from "react";
import "./App.scss";

// components
import NavBar from "./components/navBar/NavBar";
import Config from "./components/config/Config";
import Scene from "./components/scene/Scene";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <Config />
          <Scene />
        </div>
      </div>
    </div>
  );
}

export default App;
