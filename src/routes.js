import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard/Dashboard";
import House from "./component/House/House";
import Wizard from "./component/Wizard/Wizard";

export default (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/house" component={House} />
    <Route path="/wizard/:id" component={Wizard} />
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);