/**
 * @module Sagas/GitHub
 * @desc GitHub
 */
import { all, put, select, takeLatest } from "redux-saga/effects";

import { GITHUB_GET_REPOS, SWITCH_MENU, EXCEPTION } from "../state/actionTypes";

/**
 * Login
 *
 * @param {Object} action
 *
 */
export function* switchMenu({ payload }) {
  try {
    const repos = yield select(state => state.github.repos);

    if (!repos.data[payload.query] || !repos.data[payload.query].length) {
      yield put({
        type: GITHUB_GET_REPOS,
        payload
      });
    }
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: EXCEPTION,
      payload: err
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([takeLatest(SWITCH_MENU, switchMenu)]);
}
