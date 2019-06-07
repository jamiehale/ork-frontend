import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import createRootReducer from './reducer';
import rootSaga from './sagas';

export { loadState, saveState } from './local-storage';

export const history = createBrowserHistory();

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        logger,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
