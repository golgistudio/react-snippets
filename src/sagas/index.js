import { all, fork } from "redux-saga/effects";

import github from "./github";
import app from "./app";

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(github), fork(app)]);
}
