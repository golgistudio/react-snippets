import { createActions } from "redux-actions";

import { SWITCH_MENU } from "./actionTypes";

export const { switchMenu } = createActions({
  [SWITCH_MENU]: (query: string) => ({ query })
});
