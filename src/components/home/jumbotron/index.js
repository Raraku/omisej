import React from "react";

import { Row, Col, Carousel } from "react-bootstrap";
import D from "./d.png";
import C from "./c.png";
import E from "./e.jpg";

export default () => {
  return (
    <div>
      <Row className="third">
        <Col className="fourth" xs={6}>
          <div className="jumbotron-text w-100 text-center ">
            <div className="jumbotron-header">Omisej Nigeria Limited</div>
            With more than 25 years of experience in the field.{" "}
            <b>Omisej Nigeria Limited</b> is an industry leader in
          </div>
        </Col>
        <Col xs={6}>
          <Carousel className="fifth">
            <Carousel.Item>
              <img className="d-block w-100" src={C} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={D} alt="Third slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={E} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};
