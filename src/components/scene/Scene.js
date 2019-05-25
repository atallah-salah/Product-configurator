import React, { useEffect, useState } from "react";

import * as BABYLON from "babylonjs";

// styles
import "./Scene.scss";
import { Col } from "react-bootstrap";

const Scene = () => {
  const [color, colorUpdate] = useState(null);
  const [texture, textureUpdate] = useState(null);

  let canvas, engine, scene, camera, light;

  useEffect(() => {
    // init babylonjs canvas
    canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);
    camera = new BABYLON.ArcRotateCamera("Camera", 1, 3, 30, new BABYLON.Vector3(0, 0, 0), scene);
    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    // camera.useBouncingBehavior = true;
    camera.useFramingBehavior = true;

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize();
    });

    var myBox = BABYLON.MeshBuilder.CreateBox("myBox", { height: 5, width: 2, depth: 5 }, scene);
  }, []);

  return (
    <Col md={10}>
      <canvas id="renderCanvas" />
    </Col>
  );
};

export default Scene;
