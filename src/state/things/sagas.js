import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Api from '../../api';
import * as actionTypes from '../action-types';
import * as thingActions from './actions';

function* loadAllThings(action) {
  try {
    const { campaignId } = action.payload;
    const { data: things } = yield call(Api.fetchAllThings, campaignId);
    yield put(thingActions.loadAllSuccess(things));
  } catch (e) {
    yield put(thingActions.loadAllFailure(e));
  }
}

function* loadThing(action) {
  try {
    const { id } = action.payload;
    const { data: thing } = yield call(Api.fetchThing, id);
    yield put(thingActions.loadSuccess(thing));
  } catch (e) {
    yield put(thingActions.loadFailure(e));
  }
}

function* createThing(action) {
  try {
    const { thing } = action.payload;
    const { data: newThing } = yield call(Api.createThing, thing);
    yield put(push(`/things/${newThing.id}`));
  } catch (e) {
    yield put(thingActions.createThingFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_ALL_THINGS_REQUEST, loadAllThings);
  yield takeEvery(actionTypes.LOAD_THING_REQUEST, loadThing);
  yield takeEvery(actionTypes.CREATE_THING_REQUEST, createThing);
}

export default root;
