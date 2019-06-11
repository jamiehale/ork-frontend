import * as actionTypes from '../action-types';
import errorAction from '../error-action';

export const loadAllRequest = () => ({
  type: actionTypes.LOAD_ALL_CAMPAIGNS_REQUEST,
});

export const loadAllSuccess = campaigns => ({
  type: actionTypes.LOAD_ALL_CAMPAIGNS_SUCCESS,
  payload: {
    campaigns,
  },
});

export const loadAllFailure = errorAction(actionTypes.LOAD_ALL_CAMPAIGNS_FAILURE);
