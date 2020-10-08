import React from "react";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";

export default () => (
  <Paper className="p-4">
    <Helmet>
      <meta charset="utf-8" />
      <title>
        Engineering Consultancy Services in Nigeria | Omisej Nigeria Limited
      </title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited provides world class Engineering Consultancy Services to Individuals, Companies, Industries and Large-scale manufacturing factories."
      />
    </Helmet>
    <div>
      <h3 className="service-head">Engineering Consultancy Services</h3>
      <div>
        <p>
          Omisej Nigeria Limited also provides engineering consultancy services.
          We assist in the development of both public and private companies.
          This can involve the areas of :
        </p>

        <ul>
          <li>Process Management</li>
          <li> Idea organization</li>
          <li> Product design</li>
          <li>fabrication</li>
        </ul>
      </div>
    </div>
    <ContactHero />
  </Paper>
);
