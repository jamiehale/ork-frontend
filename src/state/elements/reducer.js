import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_ELEMENTS_SUCCESS: {
      const { elements } = action.payload;
      return {
        ...state,
        ids: elements.map(R.prop('id')),
        byId: elements.reduce((byId, element) => ({ ...byId, [element.id]: element }), {}),
      };
    }
    case actionTypes.LOAD_ELEMENT_SUCCESS: {
      const { element } = action.payload;
      return {
        ...state,
        ids: [element.id],
        byId: {
          [element.id]: element,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
