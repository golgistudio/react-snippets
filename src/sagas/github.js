/**
 * @module Sagas/GitHub
 * @desc GitHub
 */

import { all, call, put, takeLatest } from "redux-saga/effects";
import { request } from "../utils/client";

import {
  GITHUB_GET_REPOS_SUCCESS,
  GITHUB_GET_REPOS_FAILURE,
  GITHUB_GET_REPOS
} from "../state/actionTypes";

/**
 * Login
 *
 * @param {Object} action
 *
 */
export function* getRepos({ payload }) {
  try {
    const response = yield call(
      request,
      `https://api.github.com/search/repositories?q=${payload.query}&sort=stars`
    );
    yield put({
      type: GITHUB_GET_REPOS_SUCCESS,
      payload: { data: response.items }
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: GITHUB_GET_REPOS_FAILURE,
      payload: err
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([takeLatest(GITHUB_GET_REPOS, getRepos)]);
}
