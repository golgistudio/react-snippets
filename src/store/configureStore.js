import { createStore, compose, applyMiddleware } from "redux";
import rootSaga from "../sagas";
import rootReducer, { initialState } from "./rootReducer";

import middleware, { sagaMiddleware } from "./middleware";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer, // new root reducer with router state
    initialState,
    composeEnhancer(
      applyMiddleware(...middleware)
      // routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};

export default configureStore;
