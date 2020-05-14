import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Navbar className="p-3 text-white text-right c-nav" sticky="bottom">
      <Container className="footer-container">
        &copy; {new Date().getFullYear()} Copyright: Omisej Nigeria Limited
      </Container>
    </Navbar>
  );
};
export default Footer;
