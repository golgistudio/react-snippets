import { combineReducers } from "redux";
import { intlReducer } from "react-intl-redux";

import { localesReducer } from "../state/localeState";
import github from "../state/github";

export const initialState = {};

const rootReducer = combineReducers({
  intl: intlReducer,
  locales: localesReducer,
  ...github
});

export default rootReducer;
