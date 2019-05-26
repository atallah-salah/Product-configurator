import React, { useState } from "react";

// styles
import "./Configuration.scss";
import { Card, CardColumns, Badge } from "react-bootstrap";

const Configuration = (props) => {
  const defaultItem = props.availableOptionOnSelectedMesh.defaultItem;
  const [selectedItem, selectItem] = useState({ color: defaultItem.color, texture: defaultItem.texture, index: defaultItem.index, val: defaultItem.color ? props.availableOptionOnSelectedMesh.colors[defaultItem.index].val : props.availableOptionOnSelectedMesh.textures[defaultItem.index].val });

  return (
    <>
      {/* check if colors array have items */}
      {props.availableOptionOnSelectedMesh.colors.length > 0 && (
        <Card>
          <Card.Header>Select color :</Card.Header>
          <Card.Body>
            <CardColumns>
              {props.availableOptionOnSelectedMesh.colors.map((color, i) => {
                return (
                  <Card
                    key={i}
                    style={{ backgroundColor: `rgb(${color.val.join(",")})` }}
                    className={selectedItem.color && selectedItem.index === i ? "card-item active" : "card-item"}
                    onClick={() => {
                      selectItem({ color: true, texture: false, index: i, val: color.val });
                    }}
                  >
                    <Badge variant="secondary">${color.price}</Badge>
                  </Card>
                );
              })}
            </CardColumns>
          </Card.Body>
        </Card>
      )}
      {/* check if textures array have items */}
      {props.availableOptionOnSelectedMesh.textures.length > 0 && (
        <Card>
          <Card.Header>Select Texture :</Card.Header>
          <Card.Body>
            <CardColumns>
              {props.availableOptionOnSelectedMesh.textures.map((texture, i) => {
                return (
                  <Card
                    key={i}
                    style={{ backgroundImage: `url(${texture.val})` }}
                    className={selectedItem.texture && selectedItem.index === i ? "card-item active" : "card-item"}
                    onClick={() => {
                      selectItem({ color: false, texture: true, index: i, val: texture.val });
                    }}
                  >
                    <Badge variant="secondary">${texture.price}</Badge>
                  </Card>
                );
              })}
            </CardColumns>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Configuration;
