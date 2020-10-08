import React from "react";
import Paper from "@material-ui/core/Paper";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";

export default () => (
  <Paper className="p-4">
    <Helmet>
      <meta charset="utf-8" />
      <title>
        Domestic and Industrial Plumbing in Nigeria | Omisej Nigeria Limited
      </title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited is experienced in the fabrication and design of complex and highly efficient plumbing systems."
      />
    </Helmet>
    <div>
      <h3 className="service-head">Domestic and Industrial plumbing</h3>
      <div>
        <p>
          Plumbing is any system that conveys fluids for a wide range of
          applications. Plumbing uses pipes, valves, plumbing fixtures, tanks,
          and other apparatuses to convey fluids.[1] Heating and cooling (HVAC),
          waste removal, and potable water delivery are among the most common
          uses for plumbing, but it is not limited to these applications.[2] The
          word derives from the Latin for lead, plumbum, as the first effective
          pipes used in the Roman era were lead pipes.[3] In the developed
          world, plumbing infrastructure is critical to public health and
          sanitation.[4][5]
        </p>
        <p>
          Omisej Engineers are skilled in making this happen and creating the
          network needed to handle any and all quantities of fluids with scale,
          reliability and performance in mind.{" "}
        </p>
        <p>
          The major categories of plumbing systems or subsystems are:[19]
          <ul>
            <li>potable cold and hot tap water supply</li>
            <li>plumbing drainage venting</li>
            <li>
              sewage systems and septic systems with or without hot water heat
              recycling and graywater recovery and treatment systems
            </li>
            <li>Rainwater, surface, and subsurface water drainage</li>
            <li>fuel gas piping</li>
            <li>
              hydronics , i.e. heating and cooling systems using water to
              transport thermal energy, as in district heating systems, like for
              example the New York City steam system .
            </li>
          </ul>
        </p>
        <p>
          Omisej as a whole is more geared towards Industrial plumbing;
          designing and implementing systems to meet the needs of Industries and
          related manufacturers.
        </p>
      </div>
    </div>
    <ContactHero />
  </Paper>
);
