import * as actionTypes from '../action-types';
import errorAction from '../error-action';

export const loadAllRequest = campaignId => ({
  type: actionTypes.LOAD_ALL_THINGS_REQUEST,
  payload: {
    campaignId,
  },
});

export const loadAllSuccess = things => ({
  type: actionTypes.LOAD_ALL_THINGS_SUCCESS,
  payload: {
    things,
  },
});

export const loadAllFailure = errorAction(actionTypes.LOAD_ALL_THINGS_FAILURE);

export const loadRequest = id => ({
  type: actionTypes.LOAD_THING_REQUEST,
  payload: {
    id,
  },
});

export const loadSuccess = thing => ({
  type: actionTypes.LOAD_THING_SUCCESS,
  payload: {
    thing,
  },
});

export const loadFailure = errorAction(actionTypes.LOAD_THINGS_FAILURE);

export const createThingRequest = thing => ({
  type: actionTypes.CREATE_THING_REQUEST,
  payload: {
    thing,
  },
});

export const createThingSuccess = thing => ({
  type: actionTypes.CREATE_THING_SUCCESS,
  payload: {
    thing,
  },
});

export const createThingFailure = errorAction(actionTypes.CREATE_THING_FAILURE);
