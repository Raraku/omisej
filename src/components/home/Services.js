import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const Services = (props) => {
  return (
    <div className="it" ref={props.refe}>
      <br />
      <h3 className="text-center">
        <p className="mission-head">Our Services</p>
      </h3>
      <br />
      <CardDeck>
        <Card className="card-outer">
          <Card.Header>
            <h4>WATER ENGINEERING/MANAGEMENT</h4>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>Borehole drilling / maintenance</li>
              <li>Water Treatment Plant (Installation/Maintenance)</li>
              <li>
                Supply, Installation and Maintenance of Softeners and Filters
              </li>
              <li>Waste Water Treatment (Sewage/Effluent Treatment Plants)</li>
              <li>Internal water treatment for boilers and cooling towers</li>
              <li>
                Design and installation of complete packaged water factory
              </li>
              <li>Consultancy services</li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="card-outer ">
          <Card.Header>
            <h4>MECHANICAL ENGINEERING/ENVIRONMENTAL SERVICES</h4>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                Maintenance of Oil and Water Storage Tanks (Tank Farm, Sand
                blasting, coating, pressure testing, calibration)
              </li>
              <li>
                Descaling &amp; Installation of Boilers and Cooling Systems
              </li>
              <li>
                Utility equipment &amp; Installation (Pumps, Heat Exchangers,
                Fire Lines, AC)
              </li>
              <li>Sewage Plant Installation/Maintenance</li>
              <li>Corrosion Prevention and Control</li>
              <li>
                Domestic and industrial Plumbing (Water, Oil and Gas systems)
              </li>
              <li>Facility maintenance</li>
            </ul>
          </Card.Body>
        </Card>

        <Card className="card-outer ">
          <Card.Header>
            <h4>CHEMICAL ENGINEERING/MAINTENANCE</h4>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                Organic/Inorganic chemical cleaning (pipes, platform &amp; tank
                farm)
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
          </Card.Body>
        </Card>
        <Card className="card-outer ">
          <Card.Header>
            <h4>GENERAL ENGINEERING SUPPLIES</h4>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>
                Supply of pumps (submersible, chemical, transfer pumps etc)
              </li>
              <li>Supply of Drilling chemicals (Bentonite, CMC, Revelt)</li>
              <li>
                Supply of water treatment chemicals (HTH, Caustic, Alum, Soda)
              </li>
              <li>Supply of filter media (sand, Resins, Activated carbon)</li>
              <li>Supply and installation of water dispensers</li>
              <li>
                Supply of corrosion prevention chemicals (anti scalant,
                biocides)
              </li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="card-outer ">
          <Card.Header>
            <h4>STEEL STRUCTURES DESIGN AND ERECTION</h4>
          </Card.Header>
          <Card.Body>
            <ul>
              <li>Fabrication and Erection of Stanchions/Towers</li>
              <li>
                Fabrication and Erection of Oil, Gas and Water storage systems
              </li>
            </ul>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Services;
