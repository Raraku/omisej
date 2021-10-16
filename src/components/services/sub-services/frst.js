import React from "react";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";
import Q from "../../../assets/q.JPG";
import R from "../../../assets/r.JPG";

export default () => (
  <Paper className="p-2 text-justify">
    <Helmet>
      <meta charset="utf-8" />
      <title>
        Fabrication & Repair of Stanchions, Towers and Tanks in Nigeria | Omisej
        Nigeria Limited
      </title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited is experienced in the descaling and installation of Industrial Boilers and related Cooling Systems in Nigeria."
      />
    </Helmet>
    <div>
      <h3 className="service-head">
        Fabrication & Repair of Stanchions, Towers and Tanks
      </h3>
      <div>
        <p>
          Omisej is involved in the fabrication & repair of Stanchions and
          Towers for industrial and large-scale residential purposes. These can
          be overhead or underground Tanks, containing a variety of domestic and
          industrial fluids, controlled by an efficient system custom-made by us
          to fit a client's needs.
        </p>
      </div>
      <div>
        <img src={Q} alt="omisej" className="service-page-image" />
        <img src={R} alt="omisej" className="service-page-image" />
      </div>
    </div>
    <ContactHero />
  </Paper>
);
