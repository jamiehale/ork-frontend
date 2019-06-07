import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session/reducer';
import nodes from './nodes/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  session,
  nodes,
});
