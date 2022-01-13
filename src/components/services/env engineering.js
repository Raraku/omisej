import React from "react";
import Three from "./../../assets/i.JPG";
import Four from "./../../assets/m.JPG";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <div className="p-2 my-44 text-3xl leading-10 container text-justify">
      <Helmet>
        <meta charset="utf-8" />
        <title>Environmental Engineering | Omisej Nigeria Limited</title>
        <meta
          name="description"
          content="To be safe our environment need to be kept safe. To achieve a safe
        environment great effort made contributed by all to mitigate
        environmental degradation. We perform Soil Studies, ETP/Sewage Treatment Plant Installation, Drainage Channel Construction & Consultancy Services."
        />
      </Helmet>
      <div>
        <h3 className="service-head text-center text-5xl font-medium mb-12">
          ENVIRONMENTAL ENGINEERING
        </h3>
      </div>
      <p className="text-justify">
        To be safe our environment need to be kept safe. To achieve a safe
        environment great effort made contributed by all to mitigate
        environmental degradation. Omisej has made her service available in the
        following areas:
      </p>
      <ul>
        <li>Soil studies, EA, EIA</li>
        <li>ETP/sewage treatment plant installation</li>
        <li>Drainage channel construction</li>
        <li>Consultancy Services</li>
      </ul>
      <div>
        <img alt="omisej" className="service-page-image" src={Three} />
        <img alt="omisej" className="service-page-image" src={Four} />
      </div>
    </div>
  );
};
