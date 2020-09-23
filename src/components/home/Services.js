import React from "react";
import { Col, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { Link, withRouter } from "react-router-dom";
import f from "./../../assets/f.JPG";
import e from "./../../assets/e.JPG";
import b from "./../../assets/b.JPG";
import j from "./../../assets/j.JPG";

const Services = (props) => {
  console.log(props);
  return (
    <Paper className="p-3 pt-4 wow bounceIn" ref={props.refe}>
      <h3 className="text-center">
        <p className="mission-head">Our Services</p>
      </h3>

      <Row>
        <Col
          as={Link}
          to="/services/industrial-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">INDUSTRIAL PROJECT MANAGEMENT</div>
          <div className="bottom">
            <img
              alt="industrial project management"
              className="service-image"
              src={f}
            />
          </div>
        </Col>
        <Col
          as={Link}
          to="/services/environmental-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">ENVIRONMENTAL ENGINEERING</div>
          <div className="bottom">
            <img
              alt="environmental engineering"
              className="service-image"
              src={e}
            />
          </div>
        </Col>
        <Col
          as={Link}
          to="/services/mechanical-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">MECHANICAL ENGINEERING</div>
          <div className="bottom">
            <img
              alt="mechanical engineering"
              className="service-image"
              src={b}
            />
          </div>
        </Col>
        <Col
          as={Link}
          to="/services/chemical-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">CHEMICAL ENGINEERING/MAINTENANCE</div>
          <div className="bottom">
            <img alt="chemical engineering" className="service-image" src={j} />
          </div>
        </Col>
      </Row>
    </Paper>
  );
};
export default withRouter(Services);
