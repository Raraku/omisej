import React, { useEffect } from "react";
import Jumbotron from "./jumbotron";
import Services from "./Services";
import Mission from "./Mission";
import { Container } from "react-bootstrap";
import About from "./../about";
import { Helmet } from "react-helmet";
import WOW from "wowjs";
import ContactHero from "./../contact/contactHero";

export default (props) => {
  new WOW.WOW({ live: false }).init();
  console.log(props);
  return (
    <div className="wow bounceIn mb-6">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Omisej Nigeria Limited is a Nigerian indigenous company duly
        incorporated on 10th January, 1994 under the Nigerian Company and Allied
        Matters Law of 1976 as a Private Limited Liability Company. We are a
        Water, Mechanical and Chemical Engineering company. We are staffed with
        well trained Engineers with extensive experience in Steel fabrication
        and erection, water treatment, borehole drilling and servicing. Our
        services are prompt, efficient and customer oriented with zero tolerance
        to incidence."
        />
      </Helmet>
      <header>
        <Jumbotron />
      </header>

      <Container className="the-display">
        <Mission />
        <br />
        <About refe={props.refA} />
        <Services refe={props.refS} />
        <ContactHero />
      </Container>
    </div>
  );
};
