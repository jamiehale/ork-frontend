import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  ids: [],
  byId: {},
  activeId: undefined,
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
    case actionTypes.LOAD_CAMPAIGN_SUCCESS: {
      const { campaign } = action.payload;
      return {
        ...state,
        ids: R.uniq([...state.ids, campaign.id]),
        byId: {
          ...state.byId,
          [campaign.id]: campaign,
        },
      };
    }
    case actionTypes.SET_ACTIVE_CAMPAIGN_ID: {
      const { campaignId } = action.payload;
      return {
        ...state,
        activeId: campaignId,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
