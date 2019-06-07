import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NODE: {
      const { node } = action.payload;
      const index = state.nodeIds.length;
      const id = index + 1;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...node,
            id,
          },
        },
        ids: R.append(id, state.ids),
      };
    }
    case actionTypes.UPDATE_NODE: {
      const { node } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [node.id]: node,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
