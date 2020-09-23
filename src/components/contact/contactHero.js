import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter, Link } from "react-router-dom";
import Contact from "./../home/hh.svg";

const ContactHero = () => {
  return (
    <div
      className="contact-image-div mt-3 mb-3"
      style={{
        backgroundImage: `url(${Contact})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="contact-cta text-center">
        <h2 className="text-white">Have a problem we can solve?</h2>
        <Button
          as={Link}
          to="/contact-us/"
          variant="outline-light"
          className="contact-image-button text-center"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};
export default withRouter(ContactHero);
