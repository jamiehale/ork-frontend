import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Api from '../../api';
import * as actionTypes from '../action-types';
import * as placeActions from './actions';

function* loadAllPlaces(action) {
  try {
    const { campaignId } = action.payload;
    const { data: places } = yield call(Api.fetchAllPlaces, campaignId);
    yield put(placeActions.loadAllSuccess(places));
  } catch (e) {
    yield put(placeActions.loadAllFailure(e));
  }
}

function* loadPlace(action) {
  try {
    const { id } = action.payload;
    const { data: place } = yield call(Api.fetchPlace, id);
    yield put(placeActions.loadSuccess(place));
  } catch (e) {
    yield put(placeActions.loadFailure(e));
  }
}

function* createPlace(action) {
  try {
    const { place } = action.payload;
    const { data: newPlace } = yield call(Api.createPlace, place);
    yield put(push(`/places/${newPlace.id}`));
  } catch (e) {
    yield put(placeActions.createPlaceFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_ALL_PLACES_REQUEST, loadAllPlaces);
  yield takeEvery(actionTypes.LOAD_PLACE_REQUEST, loadPlace);
  yield takeEvery(actionTypes.CREATE_PLACE_REQUEST, createPlace);
}

export default root;
