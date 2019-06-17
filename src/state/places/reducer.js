import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_PLACES_SUCCESS: {
      const { places } = action.payload;
      return {
        ...state,
        ids: places.map(R.prop('id')),
        byId: places.reduce((byId, place) => ({ ...byId, [place.id]: place }), {}),
      };
    }
    case actionTypes.LOAD_PLACE_SUCCESS: {
      const { place } = action.payload;
      return {
        ...state,
        ids: [place.id],
        byId: {
          [place.id]: place,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
