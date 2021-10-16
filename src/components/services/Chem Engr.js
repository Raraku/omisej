import React from "react";
import Paper from "@material-ui/core/Paper";
import ContactHero from "./../contact/contactHero";
// import Eleven from "./images/11.jpg";
import Twelve from "./../../assets/p.JPG";
import Thirteen from "./../../assets/g.JPG";
import { Helmet } from "react-helmet";

/* <img src={Eleven} className="service-page-image" /> */

export default () => {
  return (
    <Paper className="p-2 text-justify">
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Chemical Engineering & Maintenance| Omisej Nigeria Limited
        </title>
        <meta
          name="description"
          content="Organic/Inorganic chemical cleaning (pipes, platform & tank farm);Corrosion prevention in fluid holding tanks (coating, pigging,material selection);
            Sterilization of water transport systems (flop water, effluent
            water, etc)
        Produce water treatment"
        />
      </Helmet>
      <div>
        <h3 className="service-head">CHEMICAL ENGINEERING/MAINTENANCE</h3>
      </div>
      <div className="text-justify">
        <ul>
          <li>
            Organic/Inorganic chemical cleaning (pipes, platform & tank farm)
          </li>
          <li>
            Corrosion prevention in fluid holding tanks (coating, pigging,
            material selection)
          </li>
          <li>
            Sterilization of water transport systems (flop water, effluent
            water, etc)
          </li>
          <li>Produce water treatment</li>
        </ul>
        <div>
          <p>
            We also procure and supply our customers with best quality products.
          </p>
          <div>
            <img src={Twelve} alt="omisej" className="service-page-image" />
            <img src={Thirteen} alt="omisej" className="service-page-image" />
          </div>
        </div>
        <ContactHero />
      </div>
    </Paper>
  );
};
