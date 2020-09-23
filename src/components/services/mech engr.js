import React from "react";
import Paper from "@material-ui/core/Paper";
import Five from "./../../assets/a.JPG";
import Six from "./../../assets/c.JPG";
import ContactHero from "./../contact/contactHero";
import Seven from "./../../assets/n.JPG";
import Eight from "./../../assets/o.JPG";
import Nine from "./../../assets/d.JPG";
import Ten from "./../../assets/l.JPG";

export default () => {
  return (
    <Paper className="p-4">
      <div>
        <h3 className="service-head">MECHANICAL ENGINEERING</h3>
      </div>
      <h4>Water Sourcing/Usage</h4> Experience has shown that water and other
      amenities play vital roles in comfort obtainable in homes, offices,
      campuses, hotels, factories and estates. The quality of water also affects
      the performance of industrial machines and quality of products in the
      industry.
      <br /> In bringing the quality of water to the best standard, Omisej
      Nigeria Limited is offering, but not limited to, the following services:
      <ul>
        <li>Borehole drilling/maintenance</li>
        <li>
          Fabrication, installation and servicing of water treatment plants
          (filters, aeration tanks etc)
        </li>
        <li>
          Supply and installation of ultra violet lights, reverse osmosis unit
          and ozone system
        </li>
        <li>Demineralization and general sterilization</li>
      </ul>
      <p>We also carry out consultancy services on water.</p>
      <div>
        <img alt="omisej" src={Five} className="service-page-image" />
        <img alt="omisej" src={Six} className="service-page-image" />
      </div>
      <div className="mt-3">
        <h4>Plumbing</h4>
        <p>
          General industrial and domestic plumbing of water, oil and gas lines.
        </p>
        <img alt="omisej" src={Seven} className="service-page-image" />
        <img alt="omisej" src={Eight} className="service-page-image" />
      </div>
      <div>
        <h4>Steel Structures Design</h4>

        <ul>
          <li>Fabrication and Erection of Stanchions/Towers.</li>
          <li>Fabrication and Erection of Oil, Water and Gas Storage Tanks.</li>
        </ul>

        <img alt="omisej" src={Nine} className="service-page-image" />
        <img alt="omisej" src={Ten} className="service-page-image" />
      </div>
      <ContactHero />
    </Paper>
  );
};
