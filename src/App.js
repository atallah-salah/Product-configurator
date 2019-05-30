import React, { useState, useReducer } from "react";
import GlobalStore from "./context/GlobalStore";
// styles
import "./App.scss";
import { Container, Row } from "react-bootstrap";

// components
import NavBar from "./components/navBar/NavBar";
import LeftNav from "./components/leftNav/LeftNav";
import Scene from "./components/scene/Scene";

function App() {
  const [HighLightedMeshColor, setHighLightMeshColor] = useState([]);
  const [HighLightedMeshTexture, setHighLightMeshTexture] = useState([]);

  const [colorsList, setColorsList] = useState([]);
  const [texturesList, setTexturesList] = useState([]);

  const [HighLightedMesh, setHighLightMesh] = useState(null);

  // products : list of cars, t-chert , watch , boot

  return (
    <GlobalStore.Provider value={{ HighLightedMeshTexture, setHighLightMeshTexture, HighLightedMeshColor, setHighLightMeshColor, HighLightedMesh, setHighLightMesh, colorsList, setColorsList, texturesList, setTexturesList }}>
      <NavBar />
      <Container fluid>
        <Row>
          <LeftNav />
          <Scene />
        </Row>
      </Container>
    </GlobalStore.Provider>
  );
}

export default App;
