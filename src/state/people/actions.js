import * as actionTypes from '../action-types';
import errorAction from '../error-action';

export const loadAllRequest = campaignId => ({
  type: actionTypes.LOAD_ALL_PEOPLE_REQUEST,
  payload: {
    campaignId,
  },
});

export const loadAllSuccess = people => ({
  type: actionTypes.LOAD_ALL_PEOPLE_SUCCESS,
  payload: {
    people,
  },
});

export const loadAllFailure = errorAction(actionTypes.LOAD_ALL_PEOPLE_FAILURE);

export const loadRequest = id => ({
  type: actionTypes.LOAD_PERSON_REQUEST,
  payload: {
    id,
  },
});

export const loadSuccess = person => ({
  type: actionTypes.LOAD_PERSON_SUCCESS,
  payload: {
    person,
  },
});

export const loadFailure = errorAction(actionTypes.LOAD_PEOPLE_FAILURE);

export const createPersonRequest = person => ({
  type: actionTypes.CREATE_PERSON_REQUEST,
  payload: {
    person,
  },
});

export const createPersonSuccess = person => ({
  type: actionTypes.CREATE_PERSON_SUCCESS,
  payload: {
    person,
  },
});

export const createPersonFailure = errorAction(actionTypes.CREATE_PERSON_FAILURE);
