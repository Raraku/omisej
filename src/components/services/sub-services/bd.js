import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContactHero from "../../contact/contactHero";
import S from "../../../assets/s.JPG";
import T from "../../../assets/t.JPG";

export default () => (
  <Paper className="p-4">
    <Helmet>
      <meta charset="utf-8" />
      <title>Borehole Drilling in Nigeria | Omisej Nigeria Limited</title>
      <meta
        name="description"
        content="
      Omisej Nigeria Limited is an engineering firm involved in drilling Industrial and High Volume boreholes in Nigeria."
      />
    </Helmet>
    <div>
      <h3 className="service-head">Borehole Drilling</h3>
      <div>
        <p>
          A borehole is a narrow shaft bored in the ground, either vertically or
          horizontally. A borehole may be constructed for many different
          purposes, including the extraction of water, other liquids (such as
          petroleum) or gases (such as natural gas), as part of a geotechnical
          investigation, environmental site assessment, mineral exploration,
          temperature measurement, as a pilot hole for installing piers or
          underground utilities, for geothermal installations, or for
          underground storage of unwanted substances, e.g. in carbon capture and
          storage.
        </p>
        <p>
          In Nigeria, this is the preferred method for obtaining freshwater
          needed for both domestic and industrial purposes. This is preferred
          over antiquated metnods like well and surface drainages. Water from
          boreholes are also prefered because of the biological film that grows
          naturally on the surface of sand called the Schmutzdecke. This acts as
          a natural filter as greatly improves the quality of water found within
          the earth.
        </p>
        <p>
          Of course, there are situations in which the water gotten from a
          borehole isn't of good enough quality for consumption. For this
          reason, Omisej also provides robust{" "}
          <Link to="/services/water-treatment/">Water treatment Services</Link>{" "}
          to improve the quality of the water.
        </p>
      </div>
    </div>
    <div>
      <img src={S} alt="omisej" className="service-page-image" />
      <img src={T} alt="omisej" className="service-page-image" />
    </div>
    <ContactHero />
  </Paper>
);
