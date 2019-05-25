import React from "react";
import "./App.scss";

// components
import Config from "./components/config/Config";
import Scene from "./components/scene/Scene";

function App() {
  return (
    <div className="App">
      <Config />
      <Scene />
    </div>
  );
}

export default App;
