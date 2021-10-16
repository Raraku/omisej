import React from "react";
import Paper from "@material-ui/core/Paper";
import ContactHero from "./../contact/contactHero";
import { Helmet } from "react-helmet";
import Twelve from "./../../assets/e.JPG";
import Thirteen from "./../../assets/i.JPG";

/* <img src={Eleven} className="service-page-image" /> */

export default () => {
  return (
    <Paper className="p-2 text-justify">
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Water Treatment and borehole drilling services in Lagos, Nigeria
        </title>
        <meta
          name="description"
          content="Omisej provides Water Treatment Services to Individuals, Companies and Estates in Lagos, Ogun and Oyo State."
        />
      </Helmet>
      <div>
        <h3 className="service-head">
          Water Treatment Services in Lagos, Ogun and Oyo.{" "}
        </h3>
      </div>
      <div>
        <div>
          <p>
            Omisej Nigeria Limited proves Water Treatment, Steel Fabrication and
            borehole drilling services to Individuals, Companies and Estates in
            Lagos, Ogun and Oyo State.
          </p>
          <div>
            <img src={Twelve} alt="omisej" className="service-page-image" />
            <img src={Thirteen} alt="omisej" className="service-page-image" />
          </div>
        </div>
      </div>
      <ContactHero />
    </Paper>
  );
};
