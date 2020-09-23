import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import { Link, withRouter } from "react-router-dom";
import Logo from "./logo.svg";
const MyNavbar = (props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [expanded, setExpanded] = useState(false);
  const changeExpanded = () => {
    console.log("all");
    setExpanded(!expanded);
  };
  return (
    <Navbar
      collapseOnSelect={true}
      sticky="top"
      expand="lg"
      expanded={expanded}
      onToggle={() => {
        changeExpanded();
      }}
      className="a-nav"
      onSelect={() => {
        console.log("changed");
      }}
      variant="dark"
    >
      <Navbar.Brand as={Link} onClick={handleClick} to="/">
        {props.location.pathname !== "/" && (
          <img src={Logo} className="logo-image" alt="Omisej Nigeria Limited" />
        )}
        <span className="logoa">Omisej Nigeria Limited</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            eventKey="1"
            onClick={changeExpanded}
            onSelect={changeExpanded}
            as={Link}
            to="/"
          >
            About us
          </Nav.Link>

          <Nav.Link
            eventKey="2"
            onSelect={changeExpanded}
            as={Link}
            onClick={changeExpanded}
            to="/services/"
          >
            Services
          </Nav.Link>
          <Nav.Link
            eventKey="3"
            onSelect={changeExpanded}
            as={Link}
            onClick={changeExpanded}
            to="/projects/"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            eventKey="4"
            onSelect={changeExpanded}
            as={Link}
            onClick={changeExpanded}
            to="/staff/"
          >
            Our Staff
          </Nav.Link>
          <Nav.Link
            eventKey="5"
            onClick={changeExpanded}
            onSelect={changeExpanded}
            as={Link}
            to="/hse/"
          >
            Our HSE Policy
          </Nav.Link>

          <Nav.Link
            eventKey="6"
            onSelect={changeExpanded}
            as={Link}
            onClick={changeExpanded}
            to="/contact-us/"
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(MyNavbar);
