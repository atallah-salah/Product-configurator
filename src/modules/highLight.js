import { HighlightLayer, Color3 } from "babylonjs";

const HighLight = (canvas, scene, activeMeshes) => {
  // Create Highlight contanier
  let HighlightLayerArray = new HighlightLayer("HighlightLayerArray", scene);

  let HighLightedMesh;

  // get meshes name to check if they are customizable or not
  let activeMeshesName = activeMeshes.map((mesh) => mesh.name);

  // add listner to pick mouse click
  canvas.onclick = () => {
    let pickResult = scene.pick(scene.pointerX, scene.pointerY);

    // check if the click was on mesh and check if that mesh allowed to highlight or not
    if (pickResult.hit && activeMeshesName.indexOf(pickResult.pickedMesh.name) !== -1) {
      setHighLight(pickResult.pickedMesh);
    } else {
      clearHighLight();
    }
  };

  // set aplha for animated highlight (blur)
  let alpha = 0;
  scene.registerBeforeRender(() => {
    alpha += 0.25;

    HighlightLayerArray.blurHorizontalSize = 0.3 + Math.cos(alpha) * 0.6 + 0.6;
    HighlightLayerArray.blurVerticalSize = 0.3 + Math.sin(alpha / 3) * 0.6 + 0.6;
  });

  const setHighLight = (mesh) => {
    // check if there is no highlighted mesh before or if there is highlighted mesh check if it's not equal the last one highlighted
    if (!HighLightedMesh || (HighLightedMesh && HighLightedMesh.uniqueId !== mesh.uniqueId)) {
      HighLightedMesh = mesh;
      HighlightLayerArray.addMesh(mesh, Color3.White());
      // check if thatclick not happen on the same mesh already highlighted before
    } else if (HighLightedMesh.uniqueId !== mesh.uniqueId) {
      clearHighLight();
    }
  };

  const clearHighLight = () => {
    // check if highlight layer has any mesh
    if (Object.keys(HighlightLayerArray._meshes).length) {
      HighlightLayerArray.removeMesh(HighLightedMesh);
      HighLightedMesh = null;
    }
  };
};

export default HighLight;
