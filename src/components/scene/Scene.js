import React, { useEffect, useState, useContext } from "react";
import { SceneLoader, Engine, Scene as BabyLonScene, Vector3, ArcRotateCamera, HemisphericLight, Color4, Layer, StandardMaterial, Color3, Texture, MeshBuilder } from "babylonjs";
import GlobalStore from "./../../context/GlobalStore";
// modules
import HighLight from "./../../modules/highLight";

// styles
import "./Scene.scss";
import { Col } from "react-bootstrap";

// init constant for create scene and canvas in babylonjs
let canvas, engine, scene, camera, light;

const Scene = () => {
  const [activeMeshs, setActiveMeshs] = useState([]);
  const store = useContext(GlobalStore);

  const importMesh = (meshName) => {
    SceneLoader.ImportMesh("", "assets/", `${meshName}.babylon`, scene, function(meshes) {
      meshes.map((mesh, i) => {
        // add fake metadata
        mesh.metadata = {
          isReplacement: false,
          default: { color: true, texture: false, index: 2 },
          colors: [{ price: 63, val: [114, 193, 226] }, { price: 6, val: [154, 153, 126] }, { price: 9, val: [14, 223, 126] }, { price: 45, val: [254, 253, 26] }, { price: 5, val: [14, 35, 246] }],
          textures: [
            { price: 63, val: "https://www.babylonjs-playground.com/textures/grass.png" },
            { price: 6, val: "https://images.pexels.com/photos/921776/pexels-photo-921776.jpeg?cs=srgb&dl=backdrop-background-floor-921776.jpg&fm=jpg" },
            { price: 9, val: "https://cdn-ep19.pressidium.com/wp-content/uploads/2018/09/texture-photography-wood-bark.jpg" }
          ],
          replacements: ["mesh", "mesh"]
        };
      });
      setActiveMeshs([...meshes]);

      return meshes;
    });
  };

  const setMeshColor = (color) => {
    if (store.HighLightedMesh) {
      if (!store.HighLightedMesh.material) {
        let material = new StandardMaterial("Material", scene);

        material.diffuseColor = new Color3(color[0] / 255, color[1] / 255, color[2] / 255);
        store.HighLightedMesh.material = material;
      } else {
        store.HighLightedMesh.material.diffuseColor = new Color3(color[0] / 255, color[1] / 255, color[2] / 255);
      }
    }
  };

  const setMeshTexture = (texture) => {
    if (store.HighLightedMesh) {
      if (!store.HighLightedMesh.material) {
        let material = new StandardMaterial("Material", scene);

        material.diffuseTexture = new Texture(texture, scene);
        store.HighLightedMesh.material = material;
      } else {
        store.HighLightedMesh.material.diffuseTexture = new Texture(texture, scene);
      }
    }
  };

  useEffect(() => {
    canvas = document.getElementById("renderCanvas");
    engine = new Engine(canvas, true);
    scene = new BabyLonScene(engine);
    camera = new ArcRotateCamera("Camera", 1, 3, 30, new Vector3(0, 0, 0), scene);
    light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // set camera auto rotate and attach controls
    camera.attachControl(canvas, true);
    camera.useAutoRotationBehavior = true;
    camera.useFramingBehavior = true;

    // set canvas background
    scene.clearColor = new Color4(0.1, 0.5, 1, 1);
    new Layer("back", "https://static.wixstatic.com/media/806cc1_d5823057614f44889130b0b5bd94873b~mv2_d_1920_1280_s_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg", scene);

    // start render the scene
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize();
    });

    importMesh("Rabbit");
  }, []);

  useEffect(() => {
    // check if canvas and scene defined
    if (canvas && scene) {
      let setHMesh = HighLight(canvas, scene, activeMeshs, store.setHighLightMesh);
    }
  }, [activeMeshs]);

  useEffect(() => {
    if (store.HighLightedMesh) {
      store.setColorsList(store.HighLightedMesh.metadata.colors);
      store.setTexturesList(store.HighLightedMesh.metadata.textures);
    } else {
      store.setColorsList([]);
      store.setTexturesList([]);
    }
  }, [store.HighLightedMesh]);

  useEffect(() => {
    setMeshColor(store.HighLightedMeshColor);
  }, [store.HighLightedMeshColor]);

  useEffect(() => {
    setMeshTexture(store.HighLightedMeshTexture);
  }, [store.HighLightedMeshTexture]);

  return (
    <GlobalStore.Provider>
      <canvas id="renderCanvas" />
    </GlobalStore.Provider>
  );
};

export default Scene;
