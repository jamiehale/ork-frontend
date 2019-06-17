import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session/reducer';
import campaigns from './campaigns/reducer';
import people from './people/reducer';
import places from './places/reducer';
import things from './things/reducer';
import nodes from './nodes/reducer';
import categories from './categories/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  session,
  campaigns,
  people,
  places,
  things,
  nodes,
  categories,
});
