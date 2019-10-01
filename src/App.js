import React from "react";
import { Router, Switch } from "react-router-dom";

import { config } from "./config";
import { AppWrapper } from "./components";

const App = props => (
  <Router history={config.history}>
    <Switch>
      <AppWrapper {...props} />
    </Switch>
  </Router>
);

export default App;
