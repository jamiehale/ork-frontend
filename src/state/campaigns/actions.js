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

export const loadRequest = id => ({
  type: actionTypes.LOAD_CAMPAIGN_REQUEST,
  payload: {
    id,
  },
});

export const loadSuccess = campaign => ({
  type: actionTypes.LOAD_CAMPAIGN_SUCCESS,
  payload: {
    campaign,
  },
});

export const loadFailure = errorAction(actionTypes.LOAD_CAMPAIGN_FAILURE);

export const createCampaignRequest = campaign => ({
  type: actionTypes.CREATE_CAMPAIGN_REQUEST,
  payload: {
    campaign,
  },
});

export const createCampaignSuccess = campaign => ({
  type: actionTypes.CREATE_CAMPAIGN_SUCCESS,
  payload: {
    campaign,
  },
});

export const createCampaignFailure = errorAction(actionTypes.CREATE_CAMPAIGN_FAILURE);

export const setActiveCampaignId = campaignId => ({
  type: actionTypes.SET_ACTIVE_CAMPAIGN_ID,
  payload: {
    campaignId,
  },
});
