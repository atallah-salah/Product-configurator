import React, { useState, useReducer } from "react";
import GlobalStore from "./context/GlobalStore";
// styles
import "./App.scss";
import { Container, Row, Card, Button, Nav, Col, Tabs, Tab, CardColumns, Badge } from "react-bootstrap";

// components
import NavBar from "./components/navBar/NavBar";
import LeftNav from "./components/leftNav/LeftNav";
import Scene from "./components/scene/Scene";
import Configurator from "./components/configurator/Configurator";

function App() {
  const [HighLightedMeshColor, setHighLightMeshColor] = useState([]);
  const [HighLightedMeshTexture, setHighLightMeshTexture] = useState([]);

  const [colorsList, setColorsList] = useState([]);
  const [texturesList, setTexturesList] = useState([]);

  const [HighLightedMesh, setHighLightMesh] = useState(null);

  const [selectedList, setSelectedList] = useState(null);

  let arr = new Array(2).fill(3);
  // products : list of cars, t-chert , watch , boot
  // <CardColumns>

  const handleTab = (event) => {
    let childs = document.querySelector("#uncontrolled-tab-contenty");
  };

  return (
    <GlobalStore.Provider value={{ HighLightedMeshTexture, setHighLightMeshTexture, HighLightedMeshColor, setHighLightMeshColor, HighLightedMesh, setHighLightMesh, colorsList, setColorsList, texturesList, setTexturesList }}>
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={2} className={"leftNav-container"}>
            <LeftNav />
          </Col>
          <Col md={10} className="sceneC">
            <Scene />
            <Configurator
              data={{
                defaultItem: { color: true, texture: false, index: 2 },
                colors: [{ price: 63, val: [114, 193, 226] }, { price: 6, val: [154, 153, 126] }, { price: 9, val: [14, 223, 126] }, { price: 45, val: [254, 253, 26] }, { price: 5, val: [14, 35, 246] }],
                textures: [
                  { price: 63, val: "https://www.babylonjs-playground.com/textures/grass.png" },
                  { price: 6, val: "https://images.pexels.com/photos/921776/pexels-photo-921776.jpeg?cs=srgb&dl=backdrop-background-floor-921776.jpg&fm=jpg" },
                  { price: 9, val: "https://cdn-ep19.pressidium.com/wp-content/uploads/2018/09/texture-photography-wood-bark.jpg" },
                  { price: 45, val: "src" },
                  { price: 5, val: "src" }
                ]
              }}
            />
          </Col>
        </Row>
      </Container>
    </GlobalStore.Provider>
  );
}

export default App;
