import React from "react";

import { Row, Col, Carousel } from "react-bootstrap";
import D from "./ci.jpg";
import C from "./di.jpg";
import E from "./ei.jpg";
import F from "./fi.jpg";

import { Helmet } from "react-helmet";

export default () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="is a Nigerian indigenous company duly
        incorporated on 10th January, 1994 under the Nigerian Company and Allied
        Matters Law of 1976 as a Private Limited Liability Company. We are a
        Water, Mechanical and Chemical Engineering company. We are staffed with
        well trained Engineers with extensive experience in Steel fabrication
        and erection, water treatment, borehole drilling and servicing. Our
        services are prompt, efficient and customer oriented with zero tolerance
        to incidence."
        />
      </Helmet>
      <Row className="third h-50">
        <Col className="fourth" xs={12} md={6}>
          <div className="jumbotron-text w-100 text-center ">
            <div className="jumbotron-header">Omisej Nigeria Limited</div>
            <i>...An Engineering Services Company</i>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Carousel className="fifth">
            <Carousel.Item>
              <img className="d-block c-image" src={C} alt="First slide" />
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
