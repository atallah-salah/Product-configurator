import React, { useState } from "react";

// styles
import "./Configuration.scss";
import { Card, CardColumns, Badge } from "react-bootstrap";

const Configuration = (props) => {
  const defaultItem = props.data.defaultItem;
  const [selectedItem, selectItem] = useState({ color: defaultItem.color, texture: defaultItem.texture, index: defaultItem.index, val: defaultItem.color ? props.data.colors[defaultItem.index].val : props.data.textures[defaultItem.index].val });

  return (
    <div>
      {/* check if colors array have items */}
      {props.data.colors.length > 0 && (
        <Card>
          <Card.Header>Select color :</Card.Header>
          <Card.Body>
            <CardColumns>
              {props.data.colors.map((color, i) => {
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
      {props.data.textures.length > 0 && (
        <Card>
          <Card.Header>Select Texture :</Card.Header>
          <Card.Body>
            <CardColumns>
              {props.data.textures.map((texture, i) => {
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
    </div>
  );
};

export default Configuration;
