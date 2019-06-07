import { useCallback, useReducer } from 'react';

const loggingMiddleware = next => (state, action) => {
  console.log('Before', state);
  console.log('Action', action);
  const result = next(state, action);
  console.log('After', result);
  return result;
};

const useLoggingReducer = (reducer, initialState) => {
  const loggingReducer = useCallback(loggingMiddleware(reducer));
  return useReducer(loggingReducer, initialState);
};

export default useLoggingReducer;
