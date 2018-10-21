import { handleActions } from "redux-actions";
import immutable from "immutability-helper";
import { parseError } from "../utils/client";

import {
  GITHUB_GET_REPOS_SUCCESS,
  GITHUB_GET_REPOS_FAILURE,
  GITHUB_GET_REPOS
} from "../state/actionTypes";
import { STATUS } from "../utils/constants";

import { createActions } from "redux-actions";

export const { githubGetRepos: getRepos } = createActions({
  [GITHUB_GET_REPOS]: (query: string) => ({ query })
});

export const githubState = {
  repos: {
    data: {},
    status: STATUS.IDLE,
    message: "",
    query: ""
  }
};

export default {
  github: handleActions(
    {
      [GITHUB_GET_REPOS]: (state, { payload }) => {
        const data = state.repos.data[payload.query]
          ? state.repos.data[payload.query]
          : [];

        return immutable(state, {
          repos: {
            data: {
              [payload.query]: { $set: data }
            },
            message: { $set: "" },
            query: { $set: payload.query },
            status: { $set: STATUS.RUNNING }
          }
        });
      },
      [GITHUB_GET_REPOS_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          repos: {
            data: {
              [state.repos.query]: { $set: payload.data || [] }
            },
            status: { $set: STATUS.READY }
          }
        }),
      [GITHUB_GET_REPOS_FAILURE]: (state, { payload }) =>
        immutable(state, {
          repos: {
            message: { $set: parseError(payload.message) },
            status: { $set: STATUS.ERROR }
          }
        })
    },
    githubState
  )
};
