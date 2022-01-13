import React from "react";
import { Link } from "react-router-dom";
import f from "./../assets/f.JPG";
import e from "./../assets/e.JPG";
import b from "./../assets/b.JPG";
import j from "./../assets/j.JPG";

const Services = (props) => {
  console.log(props);
  return (
    <div className="wow bounceIn">
      <div className="lg:columns-2 gap-10">
        <Link
          to="/services/industrial-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">INDUSTRIAL PROJECT MANAGEMENT</div>
          <div className="bottom pb-8">
            <img
              alt="industrial project management"
              className="service-image"
              src={f}
            />
          </div>
        </Link>
        <Link
          to="/services/environmental-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">ENVIRONMENTAL ENGINEERING</div>
          <div className="bottom">
            <img
              alt="environmental engineering"
              className="service-image"
              src={e}
            />
          </div>
        </Link>
        <Link
          to="/services/mechanical-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">MECHANICAL ENGINEERING</div>
          <div className="bottom pb-8">
            <img
              alt="mechanical engineering"
              className="service-image"
              src={b}
            />
          </div>
        </Link>
        <Link
          to="/services/chemical-engineering/"
          xs={12}
          md={6}
          className="services"
        >
          <div className="top">CHEMICAL ENGINEERING/MAINTENANCE</div>
          <div className="bottom">
            <img alt="chemical engineering" className="service-image" src={j} />
          </div>
        </Link>
      </div>
      <div className="w-100 text-right pt-24">
        <Link
          to="/services/"
          className="bg-gray-100 text-2xl p-6 rounded-lg hover:ring-2 text-black text-center hover:bg-slate-600 hover:text-white"
        >
          View all Services{" "}
        </Link>
      </div>
    </div>
  );
};
export default Services;
