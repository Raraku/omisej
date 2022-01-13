import CardServices from "./Services";
import { Link } from "react-router-dom";

export const Services = (props) => {
  console.log("here");
  return (
    <div className="text-center my-44">
      <div className="container">
        <div className="section-title mb-10">
          <h2 className="text-5xl text-sky-600 ">Our Services</h2>
          <p className="text text-4xl">
            We perform borehole drilling, retrofitting, steel fabrication, RO
            installation; Industrial painting and a list of other engineering
            services.
          </p>
        </div>
        <div className="flex flex-col gap-y-12 text-4xl text-left">
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/water-treatment/"
          >
            Water Treatment
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/borehole-drilling"
          >
            Borehole Drilling
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/sewage-treatment"
          >
            Sewage Treatment
          </Link>

          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/descaling-boilers-cooling-systems/"
          >
            Descaling and Installation of Boilers and cooling systems
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/supply-of-chemicals/"
          >
            Supply of Chemicals
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/fabrication"
          >
            Fabrication/Repair of Stanchions/Towers{" "}
          </Link>

          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/engineering-consultancy/"
          >
            Engineering Consultancy Services
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/chemical-cleaning/"
          >
            Organic/Inorganic Chemical Cleaning
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/domestic-industrial-plumbing/"
          >
            Domestic and Industrial Plumbing
          </Link>
          <Link
            className="border-b-2 border-grey-800 pb-12 border-dashed"
            to="/services/water-treatment-in-lagos/"
          >
            Water Treatment Services in Lagos, Ogun, Oyo
          </Link>
        </div>
      </div>
    </div>
  );
};