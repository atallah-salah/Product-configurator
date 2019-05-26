import React from "react";

// styles
import "./App.scss";
import { Container, Row } from "react-bootstrap";

// components
import NavBar from "./components/navBar/NavBar";
import LeftNav from "./components/leftNav/LeftNav";
import Scene from "./components/scene/Scene";

function App() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <LeftNav />
          <Scene />
        </Row>
      </Container>
    </>
  );
}

export default App;
