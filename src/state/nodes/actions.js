import * as actionTypes from '../action-types';

export const addNode = (node) => ({
  type: actionTypes.ADD_NODE,
  payload: {
    node,
  },
});

export const updateNode = (node) => ({
  type: actionTypes.UPDATE_NODE,
  payload: {
    node,
  },
});
