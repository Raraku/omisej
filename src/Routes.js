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
export default (props) => (
  <Switch>
    <Route exact path="/" render={() => <Home {...props} />} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="/hse" component={HSE} />
    <Route path="/about" component={about} />
    <Route path="/staff" component={Staff} />
    <Route path="/projects" component={Projects} />
    <Route component={NotFound} />
  </Switch>
);
