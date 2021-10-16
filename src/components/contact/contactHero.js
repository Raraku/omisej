import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter, Link } from "react-router-dom";
import Contact from "./../home/hh.svg";

const ContactHero = () => {
  return (
    <div className="pl-2 pr-2">
      <div
        className="contact-image-div mt-3 mb-3 pl-5 pr-5"
        style={{
          backgroundImage: `url(${Contact})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: ".5em",
        }}
      >
        <div className="contact-cta text-center">
          <h2 className="text-white red">Have a problem we can solve?</h2>
          <Button
            as={Link}
            to="/contact-us/"
            variant="outline-light"
            className="contact-image-button text-center"
          >
            Contact Us Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(ContactHero);
