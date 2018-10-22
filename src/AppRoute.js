import React from "react";
import { Route } from "react-router-dom";
import { StyleRoot } from 'radium';

const AppRoute = ({ component: AppComponent, layout: AppLayout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <StyleRoot>
          <AppLayout {...props}>
            <AppComponent {...props} />
          </AppLayout>
        </StyleRoot>
      )}
    />
  );
};

export default AppRoute;
