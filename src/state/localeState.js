import { UPDATE_LOCALES } from "./actionTypes";

export const loadLocales = () => {
  return {
    type: UPDATE_LOCALES,
    payload: {
      en: {
        "app.greeting": "Hello!"
      },
      it: {
        "app.greeting": "Ciao!"
      },
      zh: {
        "app.greeting": "你好!"
      }
    }
  };
};

// The initial state of the App
const initialState = {};

export function localesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
