import React, { useEffect, useState } from "react";
import { SceneLoader, Engine, Scene, Vector3, ArcRotateCamera, HemisphericLight, Color4 } from "babylonjs";

// modules
import HighLight from "./../../modules/highLight";

// styles
import "./Scene.scss";
import { Col } from "react-bootstrap";

// init constant for create scene and canvas in babylonjs
let canvas, engine, scene, camera, light;

const SceneFunc = () => {
  const [activeMeshs, setActiveMeshs] = useState([]);
  // const [HighLightedMesh, setHighLightMesh] = useState(null);

  const importMesh = (meshName) => {
    SceneLoader.ImportMesh("", "assets/", `${meshName}.babylon`, scene, function(meshes) {
      setActiveMeshs([...meshes]);

      meshes.map((mesh, i) => {
        // console.log(mesh.uniqueId);

        mesh["metaData"] = {
          configurable: true
        };
      });

      return meshes;
    });
  };

  // setInitScene(!initScene);

  useEffect(() => {
    console.log("render useEffect 1");

    canvas = document.getElementById("renderCanvas");
    engine = new Engine(canvas, true);
    scene = new Scene(engine);
    camera = new ArcRotateCamera("Camera", 1, 3, 30, new Vector3(0, 0, 0), scene);
    light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // set camera auto rotate and attach controls
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    camera.useFramingBehavior = true;

    // set canvas background
    scene.clearColor = new Color4(0.1, 0.5, 1, 1);
    // camera.useBouncingBehavior = true;

    // start render the scene
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize();
    });

    // setActiveMesh(importMesh("candle"));
    importMesh("skull");
    // HighLight(canvas, scene, activeMeshs);
  }, []);

  useEffect(() => {
    // check if canvas and scene defined
    if (canvas && scene) {
      HighLight(canvas, scene, activeMeshs);
    }
  }, [activeMeshs]);

  return (
    <Col md={10} className="sceneC">
      <canvas id="renderCanvas" />
    </Col>
  );
};

export default SceneFunc;
