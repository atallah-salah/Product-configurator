import React from "react";

// styles
import "./Products.scss";
import { Card, CardColumns, Badge } from "react-bootstrap";

const Products = (props) => {
  return (
    <Card>
      <Card.Header>Select product :</Card.Header>
      <Card.Body>
        <CardColumns>
          {props.data.products.map((product, i) => {
            return (
              <Card
                key={i}
                className={"card-item"}
                // onClick={() => {
                //   selectItem({ color: true, texture: false, index: i, val: color.val });
                // }}
              >
                <Badge variant="secondary">${product.price}</Badge>
              </Card>
            );
          })}
        </CardColumns>
      </Card.Body>
    </Card>
  );
};

export default Products;
