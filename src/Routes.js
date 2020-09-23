import React from "react";
import { Route, Switch } from "react-router-dom";
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
import tos from "./tos";

export default (props) => (
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
    <Route path="/services/mechanical-engineering" component={Mech} />
    <Route path="/contact-us/" component={Contact} />
    <Route path="/hse/" component={HSE} />
    <Route path="/about/" component={about} />
    <Route path="/staff/" component={Staff} />
    <Route path="/projects/" component={Projects} />
    <Route component={NotFound} />
  </Switch>
);
