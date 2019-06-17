import * as actionTypes from '../action-types';
import errorAction from '../error-action';

export const loadAllRequest = campaignId => ({
  type: actionTypes.LOAD_ALL_ELEMENTS_REQUEST,
  payload: {
    campaignId,
  },
});

export const loadAllSuccess = elements => ({
  type: actionTypes.LOAD_ALL_ELEMENTS_SUCCESS,
  payload: {
    elements,
  },
});

export const loadAllFailure = errorAction(actionTypes.LOAD_ALL_ELEMENTS_FAILURE);

export const loadRequest = id => ({
  type: actionTypes.LOAD_ELEMENT_REQUEST,
  payload: {
    id,
  },
});

export const loadSuccess = element => ({
  type: actionTypes.LOAD_ELEMENT_SUCCESS,
  payload: {
    element,
  },
});

export const loadFailure = errorAction(actionTypes.LOAD_ELEMENTS_FAILURE);

export const createElementRequest = element => ({
  type: actionTypes.CREATE_ELEMENT_REQUEST,
  payload: {
    element,
  },
});

export const createElementSuccess = element => ({
  type: actionTypes.CREATE_ELEMENT_SUCCESS,
  payload: {
    element,
  },
});

export const createElementFailure = errorAction(actionTypes.CREATE_ELEMENT_FAILURE);
