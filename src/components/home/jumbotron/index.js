import React from "react";

import { Row, Col, Carousel } from "react-bootstrap";
import D from "./ci.jpg";
import C from "./di.jpg";
import E from "./ei.jpg";
import F from "./fi.jpg";
import Logo from "./../../navbar/logo.svg";

export default () => {
  return (
    <div>
      <Row className="third">
        <Col className="fourth" xs={12} md={12}>
          <div className="jumbotron-text w-100 text-center ">
            <div>
              <img className="logo" alt="omisej-logo" src={Logo} />
            </div>
            <div className="jumbotron-header">Omisej Nigeria Limited</div>
            <i>...An Engineering Services Company</i>
          </div>
        </Col>
        <Col className="image-col" xs={12} md={12}>
          <Carousel className="fifth">
            <Carousel.Item>
              <img
                className="d-block w-100 c-image"
                src={C}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Water Engineering/Environmental Services</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 c-image"
                src={D}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Mechanical Engineering/Maintenance</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="c-image d-block w-100"
                src={E}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Chemical Engineering</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="c-image d-block w-100"
                src={F}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Steel Structures Design and Erection</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};
