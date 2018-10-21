import { combineReducers } from "redux";
import { intlReducer } from "react-intl-redux";

import { localesReducer } from "./localeState";

export const initialState = {};

const rootReducer = combineReducers({
  intl: intlReducer,
  locales: localesReducer
});

export default rootReducer;
