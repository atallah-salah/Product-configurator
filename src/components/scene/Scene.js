import React, { useEffect } from "react";
import "./Scene.scss";
import * as BABYLON from "babylonjs";

const Scene = () => {
  useEffect(() => {
    // init babylonjs canvas
    let canvas = document.getElementById("renderCanvas");
    let engine = new BABYLON.Engine(canvas, true);
    let scene = new BABYLON.Scene(engine);
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    camera.attachControl(canvas, true);

    const loadMesh = () => {
      let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    };

    loadMesh();

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }, []);

  return (
    <div className="Scene">
      <canvas id="renderCanvas" />
    </div>
  );
};

export default Scene;
