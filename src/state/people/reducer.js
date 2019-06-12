import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_PEOPLE_SUCCESS: {
      const { people } = action.payload;
      return {
        ...state,
        ids: people.map(R.prop('id')),
        byId: people.reduce((byId, person) => ({ ...byId, [person.id]: person }), {}),
      };
    }
    case actionTypes.LOAD_PERSON_SUCCESS: {
      const { person } = action.payload;
      return {
        ...state,
        ids: [person.id],
        byId: {
          [person.id]: person,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
