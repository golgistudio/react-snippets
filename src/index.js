import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import initializeReactIntl from "./localization/initializeReactIntl";
import "./theme.scss";

const { store } = configureStore();

initializeReactIntl();

render(
  <Provider store={store}>
    <IntlProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
