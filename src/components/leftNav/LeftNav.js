import React from "react";
import "./LeftNav.scss";
import { Col, Tabs, Tab } from "react-bootstrap";
import Configuration from "./../configuration/Configuration";
const LeftNav = () => {
  return (
    <Col md={2}>
      <Tabs className="nav-justified" defaultActiveKey="config" id="uncontrolled-tab-example">
        <Tab eventKey="config" title="config">
          <Configuration />
        </Tab>
        <Tab eventKey="products" title="products">
          ewefwe
        </Tab>
      </Tabs>
    </Col>
  );
};

export default LeftNav;
