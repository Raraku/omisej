import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, withRouter } from "react-router-dom";

const Footer = () => {
  return (
    <Navbar
      sticky="bottom"
      variant="dark"
      className="footer-nav vanish blee text-white pt-4"
    >
      <Container fluid className="footer-b">
        <Row className="footer-row">
          <Col className="eada" xs={12} md={8}>
            <p className="text-center">
              <b>Our Extended Services</b>
            </p>
            <Row>
              <Col className="asae" xs={12} md={4}>
                <Link to="/services/water-treatment/">Water Treatment</Link>
                <Link to="/services/borehole-drilling">Borehole Drilling</Link>
                <Link to="/services/sewage-treatment">Sewage Treatment</Link>
              </Col>
              <Col className="asae" xs={12} md={4}>
                <Link to="/services/descaling-boilers-cooling-systems/">
                  Descaling and Installation of Boilers and cooling systems
                </Link>
                <Link to="/services/supply-of-chemicals/">
                  Supply of Chemicals
                </Link>
                <Link to="/services/fabrication">
                  Fabrication/Repair of Stanchions/Towers{" "}
                </Link>
              </Col>
              <Col className="asae" xs={12} md={4}>
                <Link to="/services/engineering-consultancy/">
                  Engineering Consultancy Services
                </Link>
                <Link to="/services/chemical-cleaning/">
                  Organic/Inorganic Chemical Cleaning
                </Link>
                <Link to="/services/domestic-industrial-plumbing/">
                  Domestic and Industrial Plumbing
                </Link>
                <Link to="/services/water-treatment-in-lagos/">
                  Water Treatment Services in Lagos, Ogun, Oyo
                </Link>
              </Col>
            </Row>
          </Col>
          <Col className="asae b" md={4} xs={12}>
            <p className="text-center">
              <b>Other Important links</b>
              <div className="ule">
                <p>
                  <Link to="/privacy-policy/" className="mr-1 footer-c lom">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/terms-of-service/" className="mr-1 footer-c lom">
                    Terms of Service
                  </Link>
                </p>
                <p>
                  <Link to="/contact-us/" className="mr-1 footer-c lom">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <a
                    href="mailto:technicalsales@omisej.com"
                    className="mr-1 footer-c lom"
                  >
                    Email us
                  </a>
                </p>
              </div>
            </p>
          </Col>
        </Row>
        <div className="lain">
          <div className="footer-c last">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a id="foot" className="lom" href="https://www.omisej.com">
              {" "}
              Omisej Nigeria Limited{" "}
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default withRouter(Footer);
