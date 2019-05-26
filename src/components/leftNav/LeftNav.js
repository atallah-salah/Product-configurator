import React from "react";

// components
import Configuration from "./../configuration/Configuration";
import Products from "./../products/Products";
// styles
import "./LeftNav.scss";
import { Col, Tabs, Tab } from "react-bootstrap";

const LeftNav = () => {
  return (
    <Col md={2} className={"leftNav-container"}>
      <Tabs className="nav-justified" defaultActiveKey="Edit" id="uncontrolled-tab-example">
        <Tab eventKey="Edit" title="Edit">
          <Configuration
            data={{
              defaultItem: { color: true, texture: false, index: 2 },
              colors: [{ price: 63, val: [114, 193, 226] }, { price: 6, val: [154, 153, 126] }, { price: 9, val: [14, 223, 126] }, { price: 45, val: [254, 253, 26] }, { price: 5, val: [14, 35, 246] }],
              textures: [{ price: 63, val: "https://www.sketchuptextureclub.com/public/slider/4-travertine-wall-cladding-seamless-textures.jpg" }, { price: 6, val: "src" }, { price: 9, val: "src" }, { price: 45, val: "src" }, { price: 5, val: "src" }]
            }}
          />
        </Tab>
        <Tab eventKey="Products" title="Products">
          <Products data={{ defaultItem: 0, products: [{ price: 5, imgSrc: "", meshSrc: "" }, { price: 5, imgSrc: "", meshSrc: "" }] }} />
        </Tab>
      </Tabs>
    </Col>
  );
};

export default LeftNav;
