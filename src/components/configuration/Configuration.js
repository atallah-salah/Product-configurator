import React from "react";
import "./Configuration.scss";
import { Card, CardColumns, Badge } from "react-bootstrap";

const Configuration = () => {
  return (
    // Pick Color:
    <CardColumns>
      <Card className="card-color-item">
        <Badge variant="secondary">$9</Badge>
      </Card>
      <Card className="card-color-item">
        <Badge variant="secondary">$9</Badge>
      </Card>
      <Card className="card-color-item">
        <Badge variant="secondary">$9</Badge>
      </Card>
      <Card className="card-color-item">
        <Badge variant="secondary">$9</Badge>
      </Card>
      <Card className="card-color-item">
        <Badge variant="secondary">$9</Badge>
      </Card>
    </CardColumns>
  );
};

export default Configuration;
