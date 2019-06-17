import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_THINGS_SUCCESS: {
      const { things } = action.payload;
      return {
        ...state,
        ids: things.map(R.prop('id')),
        byId: things.reduce((byId, thing) => ({ ...byId, [thing.id]: thing }), {}),
      };
    }
    case actionTypes.LOAD_THING_SUCCESS: {
      const { thing } = action.payload;
      return {
        ...state,
        ids: [thing.id],
        byId: {
          [thing.id]: thing,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
