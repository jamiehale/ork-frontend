import * as actionTypes from '../action-types';
import errorAction from '../error-action';

export const loadAllRequest = campaignId => ({
  type: actionTypes.LOAD_ALL_PLACES_REQUEST,
  payload: {
    campaignId,
  },
});

export const loadAllSuccess = places => ({
  type: actionTypes.LOAD_ALL_PLACES_SUCCESS,
  payload: {
    places,
  },
});

export const loadAllFailure = errorAction(actionTypes.LOAD_ALL_PLACES_FAILURE);

export const loadRequest = id => ({
  type: actionTypes.LOAD_PLACE_REQUEST,
  payload: {
    id,
  },
});

export const loadSuccess = place => ({
  type: actionTypes.LOAD_PLACE_SUCCESS,
  payload: {
    place,
  },
});

export const loadFailure = errorAction(actionTypes.LOAD_PLACES_FAILURE);

export const createPlaceRequest = place => ({
  type: actionTypes.CREATE_PLACE_REQUEST,
  payload: {
    place,
  },
});

export const createPlaceSuccess = place => ({
  type: actionTypes.CREATE_PLACE_SUCCESS,
  payload: {
    place,
  },
});

export const createPlaceFailure = errorAction(actionTypes.CREATE_PLACE_FAILURE);
