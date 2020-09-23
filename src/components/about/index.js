import React from "react";

export default (props) => {
  return (
    <div className="wow bounceInUp" ref={props.refe}>
      <h3 className="mission-head">Who we are</h3>
      <p>
        <b>OMISEJ NIGERIA LIMITED</b> is a Nigerian indigenous company duly
        incorporated on 10th January, 1994 under the Nigerian Company and Allied
        Matters Law of 1976 as a Private Limited Liability Company. We are a
        Water, Mechanical and Chemical Engineering company. We are staffed with
        well-trained Engineers with extensive experience in Steel fabrication
        and erection, water treatment, borehole drilling and servicing. Our
        services are prompt, efficient and customer oriented with zero tolerance
        to incidence.
        <br />
        <br /> <b>OMISEJ NIGERIA LIMITED</b> is a registered member of:{" "}
        <ul>
          {" "}
          <li> Nigeria Society of Engineers (N.S.E) </li>
          <li> Nigeria Water & Sanitation Association (N.I.W.A.S.A)</li>
          <li> Oil Industry Services Company</li>
        </ul>
      </p>
    </div>
  );
};
