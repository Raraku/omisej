import React from "react";
import Paper from "@material-ui/core/Paper";
import ContactHero from "./../contact/contactHero";
// import Eleven from "./images/11.jpg";
import Twelve from "./../../assets/p.JPG";
import Thirteen from "./../../assets/g.JPG";

/* <img src={Eleven} className="service-page-image" /> */

export default () => {
  return (
    <Paper className="p-4">
      <div>
        <h3 className="service-head">CHEMICAL ENGINEERING/MAINTENANCE</h3>
      </div>
      <div>
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
            <img src={Twelve} className="service-page-image" />
            <img src={Thirteen} className="service-page-image" />
          </div>
        </div>
        <ContactHero />
      </div>
    </Paper>
  );
};