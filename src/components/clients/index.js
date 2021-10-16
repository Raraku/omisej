import React from "react";
import Paper from "@material-ui/core/Paper";
import a from "./a.svg";
import b from "./b.png";
import c from "./c.png";
import d from "./d.png";
import e from "./e.gif";
import f from "./f.png";
import { Row } from "react-bootstrap";

export default function Clients() {
  return (
    <Paper className="p-3 pt-4 mt-3 wow bounceIn client-paper">
      <h3 className="text-center">
        <p className="mission-head">Our Clients include</p>
      </h3>
      <Row className="client-div">
        <div className="client-image-cont">
          <img alt="omisej" className="client-image" src={a} />
        </div>
        <div className="client-image-cont">
          <img alt="omisej" className="client-image" src={b} />
        </div>
        <div className="client-image-cont">
          <img alt="omisej" className="client-image" src={c} />
        </div>
        <div className="client-image-cont">
          <img alt="omisej" className="client-image" src={d} />
        </div>
        <div className="client-image-cont">
          <img alt="omisej" className="client-image" src={e} />
        </div>
        <div className="client-image-cont">
          <img alt="omisej" className="client-image" src={f} />
        </div>
      </Row>
    </Paper>
  );
}
