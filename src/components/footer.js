import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, withRouter } from "react-router-dom";

const Footer = () => {
  return (
    <Navbar
      sticky="bottom"
      variant="dark"
      className="footer-nav vanish blee text-white pt-4"
    >
      <div className="text-center">
        <Container className="footer-b" fluid>
          <Link to="/privacy-policy/" className="mr-1 footer-c lom">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service/" className="mr-1 footer-c lom">
            Terms of Service
          </Link>
          <div className="footer-c last">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a id="foot" href="https://www.omisej.com">
              {" "}
              Omisej Nigeria Limited{" "}
            </a>
          </div>
        </Container>
      </div>
    </Navbar>
  );
};
export default withRouter(Footer);
