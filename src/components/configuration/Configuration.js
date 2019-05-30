import React, { useState, useEffect, useContext } from "react";
import GlobalStore from "./../../context/GlobalStore";

// styles
import "./Configuration.scss";
import { Card, CardColumns, Badge, Fade } from "react-bootstrap";

const Configuration = (props) => {
  const defaultItem = props.data.defaultItem;
  const [selectedItem, selectItem] = useState({ color: defaultItem.color, texture: defaultItem.texture, index: defaultItem.index, val: defaultItem.color ? props.data.colors[defaultItem.index].val : props.data.textures[defaultItem.index].val });
  const store = useContext(GlobalStore);

  return (
    <div>
      {/* fade in if colors array have items */}
      <Fade in={store.colorsList.length > 0}>
        <Card>
          <Card.Header>Select color :</Card.Header>
          <Card.Body>
            <CardColumns>
              {store.colorsList.map((color, i) => {
                return (
                  <Card
                    key={i}
                    style={{ backgroundColor: `rgb(${color.val.join(",")})` }}
                    className={selectedItem.color && selectedItem.index === i ? "card-item active" : "card-item"}
                    onClick={() => {
                      selectItem({ color: true, texture: false, index: i, val: color.val });
                      store.setHighLightMeshColor(color.val);
                    }}
                  >
                    <Badge variant="secondary">${color.price}</Badge>
                  </Card>
                );
              })}
            </CardColumns>
          </Card.Body>
        </Card>
      </Fade>
      {/* fade in if textures array have items */}
      <Fade in={store.texturesList.length > 0}>
        <Card>
          <Card.Header>Select Texture :</Card.Header>
          <Card.Body>
            <CardColumns>
              {store.texturesList.map((texture, i) => {
                return (
                  <Card
                    key={i}
                    style={{ backgroundImage: `url(${texture.val})` }}
                    className={selectedItem.texture && selectedItem.index === i ? "card-item active" : "card-item"}
                    onClick={() => {
                      selectItem({ color: false, texture: true, index: i, val: texture.val });
                      store.setHighLightMeshTexture(texture.val);
                    }}
                  >
                    <Badge variant="secondary">${texture.price}</Badge>
                  </Card>
                );
              })}
            </CardColumns>
          </Card.Body>
        </Card>
      </Fade>

      {/* fade in if replacment array have items */}
      {/* replace mesh with other mesh */}
    </div>
  );
};

export default Configuration;
