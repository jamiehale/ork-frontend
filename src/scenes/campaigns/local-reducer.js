import { useCallback } from 'react';
import useLoggingReducer from '../../hooks/logging-reducer';

const SHOW_NEW_CAMPAIGN_DIALOG = 'SHOW_NEW_CAMPAIGN_DIALOG';
const HIDE_NEW_CAMPAIGN_DIALOG = 'HIDE_NEW_CAMPAIGN_DIALOG';

const dispatchShowNewCampaignDialog = (dispatch) => () => {
  dispatch({
    type: SHOW_NEW_CAMPAIGN_DIALOG,
  });
};

const dispatchHideNewCampaignDialog = (dispatch) => () => {
  dispatch({
    type: HIDE_NEW_CAMPAIGN_DIALOG,
  });
};

const initialState = {
  showNewCampaignDialog: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_NEW_CAMPAIGN_DIALOG: {
      return {
        ...state,
        showNewCampaignDialog: true,
      };
    }
    case HIDE_NEW_CAMPAIGN_DIALOG: {
      return {
        ...state,
        showNewCampaignDialog: false,
      }
    }
    default: {
      return state;
    }
  }
};

const useLocalReducer = () => {
  const [state, dispatch] = useLoggingReducer(reducer, initialState);

  const showNewCampaignDialog = useCallback(dispatchShowNewCampaignDialog(dispatch), [dispatch]);
  const hideNewCampaignDialog = useCallback(dispatchHideNewCampaignDialog(dispatch), [dispatch]);

  return {
    state,
    showNewCampaignDialog,
    hideNewCampaignDialog,
  };
};

export default useLocalReducer;
