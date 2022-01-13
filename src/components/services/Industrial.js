import React from "react";
import One from "./images/1.jpg";
import { Helmet } from "react-helmet";
import Two from "./../../assets/l.JPG";

export default () => {
  return (
    <div className="p-2 my-44 text-3xl leading-10 container text-justify">
      <Helmet>
        <meta charset="utf-8" />
        <title>Industrial Engineering | Omisej Nigeria Limited</title>
        <meta
          name="description"
          content="As the economic growth place a demand on the society, there will be a
        need for more industries to be erected for better product formulation
        and improve employment. We offer services in: Conception, Support, Process Design and management of Industrial Projects."
        />
      </Helmet>
      <div>
        <h3 className="service-head text-center text-5xl font-medium mb-12">
          INDUSTRIAL ENGINEERING
        </h3>
      </div>
      <p className="text-justify">
        As the economic growth place a demand on the society, there will be a
        need for more industries to be erected for better product formulation
        and improve employment. Omisej is well poised to offer our client
        industrial project management in the following:
      </p>
      <ul>
        <li>Industrial project conception</li>
        <li>Industrial project support</li>
        <li>Industrial project process design</li>
        <li>Industrial project management</li>
      </ul>
      <div>
        <img alt="omisej" src={One} className="service-page-image" />
        <img alt="omisej" src={Two} className="service-page-image" />
      </div>
    </div>
  );
};
