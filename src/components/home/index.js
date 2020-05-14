import React from "react";
import Jumbotron from "./jumbotron";
import Services from "./Services";
import Mission from "./Mission";
import { Container } from "react-bootstrap";
import About from "./../about";
import Contact from "./../contact";

export default (props) => {
  console.log(props);
  return (
    <div>
      <header>
        <Jumbotron />
      </header>

      <Container>
        <Mission />
        <br />
        <About refe={props.refA} />
        <Services refe={props.refS} />
        <Contact refe={props.refC} />
      </Container>
    </div>
  );
};
