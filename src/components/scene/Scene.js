import React, { useEffect, useState } from "react";
import "./Scene.scss";
import * as BABYLON from "babylonjs";

const Scene = () => {
  const [color, colorUpdate] = useState(null);
  const [texture, textureUpdate] = useState(null);

  let canvas, engine, scene, camera, light;

  useEffect(() => {
    // init babylonjs canvas
    canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);
    camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    camera.attachControl(canvas, true);

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
    <main role="main" className="col-md-10">
      <canvas id="renderCanvas" />
    </main>
  );
};

export default Scene;
