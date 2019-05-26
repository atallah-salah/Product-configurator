import React, { useEffect, useState } from "react";

import * as BABYLON from "babylonjs";

// styles
import "./Scene.scss";
import { Col } from "react-bootstrap";

const Scene = () => {
  let canvas, engine, scene, camera, light;

  const [activeMesh, setActiveMesh] = useState(null);

  const importMesh = (meshName) => {
    BABYLON.SceneLoader.ImportMesh("", "https://www.babylonjs-playground.com/scenes/", `${meshName}.babylon`, scene, function(meshes) {
      return meshes;
    });
  };

  useEffect(() => {
    // init babylonjs canvas
    canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);
    camera = new BABYLON.ArcRotateCamera("Camera", 1, 3, 30, new BABYLON.Vector3(0, 0, 0), scene);
    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // set camera auto rotate and attach controls
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    camera.useFramingBehavior = true;
    // set canvas background
    scene.clearColor = new BABYLON.Color4(0.1, 0.5, 1, 1);
    // camera.useBouncingBehavior = true;

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize();
    });

    // var myBox = BABYLON.MeshBuilder.CreateBox("myBox", { height: 5, width: 2, depth: 5 }, scene);
    setActiveMesh(importMesh("candle"));
  }, []);

  return (
    <Col md={10} className="sceneC">
      <canvas id="renderCanvas" />
    </Col>
  );
};

export default Scene;
