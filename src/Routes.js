import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Contact from "./components/contact/";
// import NotFound from "./components/404";
// import HSE from "./Policy";
// import Projects from "./Projects";
// import about from "./components/about";
// import Services from "./components/home/Services";
// import Staff from "./components/Staff";
import Industrial from "./components/services/Industrial";
import Env from "./components/services/env engineering";
import Chem from "./components/services/Chem Engr";
import Mech from "./components/services/mech engr";
// import privacy from "./privacy";
import Wt from "./components/services/sub-services/wt";
import Bd from "./components/services/sub-services/bd";
import Dibc from "./components/services/sub-services/dibc";
import Dip from "./components/services/sub-services/dip";
import Ecs from "./components/services/sub-services/ecs";
import Frst from "./components/services/sub-services/frst";
import Occ from "./components/services/sub-services/occ";
import Sc from "./components/services/sub-services/sc";
import St from "./components/services/sub-services/st";
import WTIN from "./components/WTIN";
// import tos from "./tos";
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import ReactGA from "react-ga";
import App from "./App";
import JsonData from "./data/data.json";
import { Services as ServicesList } from "./components/servicesList";

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize("UA-000000000-0");
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    // if (initialized) {
    //   ReactGA.pageview(location.pathname + location.search);
    // }
    // console.log("here");
    window.scrollTo(0, 0);
  }, [initialized, location]);
};

export default function Nice(props) {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  usePageTracking();
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={<App landingPageData={landingPageData} />}
        />
        <Route path="/services/" element={<ServicesList />} />
        {/* <Route path="/services/water-treatment-in-lagos/" element={<WTIN />} /> */}
        <Route path="/services/environmental-engineering/" element={<Env />} />
        <Route path="/services/chemical-engineering/" element={<Chem />} />
        <Route path="/services/mechanical-engineering/" element={<Mech />} />
        <Route path="/services/water-treatment" element={<Wt />} />
        <Route path="/services/borehole-drilling/" element={<Bd />} />
        <Route
          path="/services/descaling-boilers-cooling-systems/"
          element={<Dibc />}
        />
        <Route
          path="/services/domestic-industrial-plumbing/"
          element={<Dip />}
        />
        <Route path="/services/engineering-consultancy/" element={<Ecs />} />
        <Route path="/services/fabrication/" element={<Frst />} />
        <Route path="/services/chemical-cleaning/" element={<Occ />} />
        <Route path="/services/supply-of-chemicals/" element={<Sc />} />
        <Route path="/services/sewage-treatment/" element={<St />} />
        <Route
          exact
          path="/services/industrial-engineering/"
          element={<Industrial />}
        />
        <Route path="/services/water-treatment-in-lagos/" element={<WTIN />} />
        {/* <Route exact path="/services/" component={Services} />

      <Route path="/terms-of-service/" component={tos} />
      <Route path="/privacy-policy/" component={privacy} />
      <Route path="/services/water-treatment-in-lagos/" component={WTIN} />
      <Route path="/services/environmental-engineering/" component={Env} />
      <Route path="/services/chemical-engineering/" component={Chem} />
      <Route path="/services/mechanical-engineering/" component={Mech} />
      <Route path="/services/water-treatment" component={Wt} />
      <Route path="/services/borehole-drilling/" component={Bd} />
      <Route
        path="/services/descaling-boilers-cooling-systems/"
        component={Dibc}
      />
      <Route path="/services/domestic-industrial-plumbing/" component={Dip} />
      <Route path="/services/engineering-consultancy/" component={Ecs} />
      <Route path="/services/fabrication/" component={Frst} />
      <Route path="/services/chemical-cleaning/" component={Occ} />
      <Route path="/services/supply-of-chemicals/" component={Sc} />
      <Route path="/services/sewage-treatment/" component={St} />
      <Route path="/contact-us/" component={Contact} />
      <Route path="/hse/" component={HSE} />
      <Route path="/about/" component={about} />
      <Route path="/staff/" component={Staff} />
      <Route path="/projects/" component={Projects} />
      <Route component={NotFound} /> */}
      </Routes>
      <Contact data={landingPageData.Contact} />
    </div>
  );
}
