import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/home/";
import Contact from "./components/contact/";
import NotFound from "./components/404";
import HSE from "./Policy";
import Projects from "./Projects";
import about from "./components/about";
import Services from "./components/home/Services";
import Staff from "./components/Staff";
import Industrial from "./components/services/Industrial";
import Env from "./components/services/env engineering";
import Chem from "./components/services/Chem Engr";
import Mech from "./components/services/mech engr";
import privacy from "./privacy";
import Wt from "./components/services/sub-services/wt";
import Bd from "./components/services/sub-services/bd";
import Dibc from "./components/services/sub-services/dibc";
import Dip from "./components/services/sub-services/dip";
import Ecs from "./components/services/sub-services/ecs";
import Frst from "./components/services/sub-services/frst";
import Occ from "./components/services/sub-services/occ";
import Sc from "./components/services/sub-services/sc";
import St from "./components/services/sub-services/st";
import tos from "./tos";
import ReactGA from "react-ga";

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
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default (props) => {
  usePageTracking();
  return (
    <Switch>
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route exact path="/services/" component={Services} />
      <Route
        exact
        path="/services/industrial-engineering/"
        component={Industrial}
      />
      <Route path="/terms-of-service/" component={tos} />
      <Route path="/privacy-policy/" component={privacy} />
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
      <Route component={NotFound} />
    </Switch>
  );
};
