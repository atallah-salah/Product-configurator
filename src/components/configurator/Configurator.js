import React, { useState, useEffect, useContext } from "react";
import GlobalStore from "./../../context/GlobalStore";

// styles
import "./Configurator.scss";
import { Container, Row, Card, Button, Nav, Col, Tabs, Tab, CardColumns, Badge, Fade } from "react-bootstrap";

const Configurator = (props) => {
  console.log("render config");

  const defaultItem = props.data.defaultItem;
  const [selectedItem, selectItem] = useState({ color: defaultItem.color, texture: defaultItem.texture, index: defaultItem.index, val: defaultItem.color ? props.data.colors[defaultItem.index].val : props.data.textures[defaultItem.index].val });
  const store = useContext(GlobalStore);

  const [selectedList, setSelectedList] = useState(null);

  return (
    <Fade in={store.texturesList.length > 0 || store.colorsList.length > 0}>
      <Card className={"configuration-container"}>
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey={() => {
              selectedItem.texture ? setSelectedList("Textures") : setSelectedList("Colors");
            }}
          >
            <Nav.Item>
              <Nav.Link
                className={selectedList === "Colors" ? "active" : false}
                onClick={() => {
                  setSelectedList("Colors");
                }}
              >
                Colors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={selectedList === "Textures" ? "active" : false}
                onClick={() => {
                  setSelectedList("Textures");
                }}
              >
                Textures
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={selectedList === "Replacments" ? "active" : false}
                onClick={() => {
                  setSelectedList("Replacments");
                }}
              >
                Replacments
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Tabs className="nav-justified" defaultActiveKey="" id="uncontrolled-tab-contenty" style={{ display: "none" }}>
            <Tab eventKey="Colors" title="Colors" className={selectedList === "Colors" ? "active show" : false}>
              {store.colorsList.length > 0 ? true : <div>No colors for this object</div>}
              <CardColumns className={"card-container-items row flex-row flex-nowrap"}>
                {store.colorsList.map((color, i) => {
                  return (
                    <Card
                      onClick={() => {
                        selectItem({ color: true, texture: false, index: i, val: color.val });
                        store.setHighLightMeshColor(color.val);
                      }}
                      key={i}
                      style={{ backgroundColor: `rgb(${color.val.join(",")})`, height: "3rem !important" }}
                      className={selectedItem.color && selectedItem.index === i ? "col-1 active" : " col-1"}
                    >
                      <Badge variant="secondary">${color.price}</Badge>
                    </Card>
                  );
                })}
              </CardColumns>
            </Tab>
            <Tab eventKey="Textures" title="Textures" className={selectedList === "Textures" ? "active show" : false}>
              {store.texturesList.length > 0 ? true : <div>No textures for this object</div>}
              <CardColumns className={"card-container-items row flex-row flex-nowrap"}>
                {store.texturesList.map((texture, i) => {
                  return (
                    <Card
                      onClick={() => {
                        selectItem({ color: false, texture: true, index: i, val: texture.val });
                        store.setHighLightMeshTexture(texture.val);
                      }}
                      key={i}
                      style={{ backgroundImage: `url(${texture.val})`, height: "3rem !important" }}
                      className={selectedItem.texture && selectedItem.index === i ? "col-1 active" : " col-1"}
                    >
                      <Badge variant="secondary">${texture.price}</Badge>
                    </Card>
                  );
                })}
              </CardColumns>
            </Tab>
            <Tab eventKey="Replacments" title="Replacments" className={selectedList === "Replacments" ? "active show" : false}>
              {store.colorsList.length > 400 ? true : <div>No replacment for this object</div>}
            </Tab>
            <p>ghdfgj</p>
          </Tabs>
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default Configurator;
