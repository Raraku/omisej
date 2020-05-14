import React from "react";
import { Row, Col, CardDeck, Card } from "react-bootstrap";

const Mission = () => {
  return (
    <div className="sixth">
      <CardDeck>
        <Card className="card-out">
          <Card.Header>
            <h4>Our Mission</h4>
          </Card.Header>
          <Card.Body>
            Quality and customised engineering services centered on customers,
            employee and stakeholders' satisfaction that will be delivered on a
            timely basis
          </Card.Body>
        </Card>
        <Card className="card-out">
          <Card.Header>
            <h4>Our Vision</h4>
          </Card.Header>
          <Card.Body>
            To build a world class engineering services company
          </Card.Body>
        </Card>
        <Card className="card-out">
          <Card.Header>
            <h4>Our Core Values</h4>
          </Card.Header>
          <Card.Body>
            Quality and customised engineering services centered on customers,
            employee and stakeholders' satisfaction that will be delivered on a
            timely basis
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Mission;
