import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Api from '../../api';
import * as actionTypes from '../action-types';
import * as elementActions from './actions';

function* loadAllElements(action) {
  try {
    const { campaignId } = action.payload;
    const { data: elements } = yield call(Api.fetchAllElements, campaignId);
    yield put(elementActions.loadAllSuccess(elements));
  } catch (e) {
    yield put(elementActions.loadAllFailure(e));
  }
}

function* loadElement(action) {
  try {
    const { id } = action.payload;
    const { data: element } = yield call(Api.fetchElement, id);
    yield put(elementActions.loadSuccess(element));
  } catch (e) {
    yield put(elementActions.loadFailure(e));
  }
}

function* createElement(action) {
  try {
    const { element } = action.payload;
    const { data: newElement } = yield call(Api.createElement, element);
    yield put(push(`/elements/${newElement.id}`));
  } catch (e) {
    yield put(elementActions.createElementFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_ALL_ELEMENTS_REQUEST, loadAllElements);
  yield takeEvery(actionTypes.LOAD_ELEMENT_REQUEST, loadElement);
  yield takeEvery(actionTypes.CREATE_ELEMENT_REQUEST, createElement);
}

export default root;
