import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";

export default (props) => {
  return (
    <Paper className="pl-4 pr-4 pt-2 pb-5" ref={props.refe}>
      <br />
      <h3 className="text-center pt-3 pb-3 header">Contact us</h3>
      <Row className="contact">
        <Col xs={12} md={3} className="contact-block-a">
          <h5>Contact Details</h5>
          <div class=" fp-icon-box-5 icon-center dark-version">
            <h6>
              For Enquiries, Please Call{" "}
              <FontAwesomeIcon icon={faPhoneAlt} size="md" />
            </h6>
            <div class="sub-title"></div>
            <p>+(234)802&nbsp;3221&nbsp;189</p>
          </div>
          <div class=" fp-icon-box-5 icon-center dark-version">
            <span class="fp-icon">
              <i class="factory-travel"></i>
            </span>
            <h5>Our Office Address</h5>
            <div class="sub-title"></div>
            <p>
              30B, Olufunmilayo Street, Dideolu Estate
              <br />
              Ogba, Ikeja, Lagos.
              <br />
              P.O Box 60501
            </p>
          </div>
        </Col>
        <Col xs={12} md={9} className="contact-block-b">
          <Form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <Alert variant="success">
              Fill the form below to contact us. Expect a reply within 48 hours
            </Alert>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Personal or Company email"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="number"
                name="number"
                placeholder="Type in your phone number"
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Message*</Form.Label>
              <Form.Control
                className="textarea"
                as="textarea"
                name="message"
                placeholder="Your message"
              />
            </Form.Group>
            Fields with * are required <br /> <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Paper>
  );
};
