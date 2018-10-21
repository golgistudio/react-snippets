import React from "react";
import { Switch } from "react-router-dom";

import Home from "./containers/Home";
import ThemeExample from "./containers/ThemeExample";
import LocalizationExample from "./containers/LocalizationExample";
import GitHub from "./containers/GitHub";
import AppRoute from "./AppRoute";
import MainLayout from "./layouts/MainLayout";
import SidebarLayout from "./layouts/SidebarLayout";

const App = ({ location }) => {
  return (
    <Switch>
      <AppRoute exact path="/" component={Home} layout={MainLayout} />
      <AppRoute path="/theme" component={ThemeExample} layout={SidebarLayout} />
      <AppRoute path="/github" component={GitHub} layout={SidebarLayout} />
      <AppRoute
        path="/locale"
        component={LocalizationExample}
        layout={SidebarLayout}
      />
    </Switch>
  );
};

export default App;
