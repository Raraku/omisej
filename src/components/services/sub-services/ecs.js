import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <div className="p-2 my-44 text-3xl leading-10 container text-justify">
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
      <h3 className="service-head text-center text-5xl font-medium mb-12">
        Engineering Consultancy Services
      </h3>
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
  </div>
);
