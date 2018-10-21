import { createStore, compose, applyMiddleware } from "redux";
import rootReducer, { initialState } from "./rootReducer";

const configureStore = () => {
  const store = createStore(
    rootReducer, // new root reducer with router state
    initialState,
    compose(
      applyMiddleware()
      // routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  );

  return { store };
};

export default configureStore;
