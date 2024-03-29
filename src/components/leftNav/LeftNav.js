import React from "react";

// components
import Configuration from "./../configuration/Configuration";
import Products from "./../products/Products";
// styles
import "./LeftNav.scss";
import { Col, Tabs, Tab, Card, Nav, Button } from "react-bootstrap";

const LeftNav = (props) => {
  return (
    <>
      {/*  */}
      <Tabs className="nav-justified" defaultActiveKey="Products" id="uncontrolled-tab-example">
        <Tab eventKey="Edit" title="Edit">
          <Configuration
            HighLightedMesh={props.HighLightedMesh}
            data={{
              defaultItem: { color: true, texture: false, index: 2 },
              colors: [{ price: 63, val: [114, 193, 226] }, { price: 6, val: [154, 153, 126] }, { price: 9, val: [14, 223, 126] }, { price: 45, val: [254, 253, 26] }, { price: 5, val: [14, 35, 246] }],
              textures: [
                { price: 63, val: "https://www.babylonjs-playground.com/textures/grass.png" },
                { price: 6, val: "https://images.pexels.com/photos/921776/pexels-photo-921776.jpeg?cs=srgb&dl=backdrop-background-floor-921776.jpg&fm=jpg" },
                { price: 9, val: "https://cdn-ep19.pressidium.com/wp-content/uploads/2018/09/texture-photography-wood-bark.jpg" },
                { price: 45, val: "src" },
                { price: 5, val: "src" }
              ]
            }}
          />
        </Tab>
        <Tab eventKey="Products" title="Products" className={"products-tab"}>
          <Products data={{ defaultItem: 0, products: [{ price: 5, imgSrc: "", meshSrc: "" }, { price: 5, imgSrc: "", meshSrc: "" }] }} />
        </Tab>
      </Tabs>
    </>
  );
};

export default LeftNav;
