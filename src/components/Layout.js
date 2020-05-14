import React from "react";
import Container from "react-bootstrap/Container";

export default (props) => (
  <div>
    <Container className="second" fluid>
      {props.children}
    </Container>
  </div>
);
