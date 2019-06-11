import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ALL_CAMPAIGNS_SUCCESS: {
      const { campaigns } = action.payload;
      return {
        ...state,
        ids: campaigns.map(R.prop('id')),
        byId: campaigns.reduce((byId, campaign) => ({ ...byId, [campaign.id]: campaign }), {}),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
