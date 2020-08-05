import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import { Link, withRouter } from "react-router-dom";
import Logo from "./logo.svg";
const MyNavbar = (props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="a-nav"
      variant="light"
    >
      <Navbar.Brand as={Link} onClick={handleClick} to="/">
        <img src={Logo} className="logo-image" alt="Omisej Nigeria Limited" />{" "}
        <span className="logoa">Omisej Nigeria Limited</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {props.location.pathname === "/" ? (
            <Nav.Link onClick={props.handleClickA}>About us</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/">
              About us
            </Nav.Link>
          )}
          {props.location.pathname === "/" ? (
            <Nav.Link onClick={props.handleClickS}>Services</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/services/">
              Services
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/projects/">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/staff/">
            Our Staff
          </Nav.Link>
          <Nav.Link as={Link} to="/hse/">
            Our HSE Policy
          </Nav.Link>
          {props.location.pathname === "/" ? (
            <Nav.Link onClick={props.handleClickC}>Contact Us</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/contact-us/">
              Contact Us
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNavbar);
