import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Api from '../../api';
import * as actionTypes from '../action-types';
import * as personActions from './actions';

function* loadAllPeople(action) {
  try {
    const { campaignId } = action.payload;
    const { data: people } = yield call(Api.fetchAllPeople, campaignId);
    yield put(personActions.loadAllSuccess(people));
  } catch (e) {
    yield put(personActions.loadAllFailure(e));
  }
}

function* loadPerson(action) {
  try {
    const { id } = action.payload;
    const { data: person } = yield call(Api.fetchPerson, id);
    yield put(personActions.loadSuccess(person));
  } catch (e) {
    yield put(personActions.loadFailure(e));
  }
}

function* createPerson(action) {
  try {
    const { person } = action.payload;
    const { data: newPerson } = yield call(Api.createPerson, person);
    yield put(push(`/people/${newPerson.id}`));
  } catch (e) {
    yield put(personActions.createPersonFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_ALL_PEOPLE_REQUEST, loadAllPeople);
  yield takeEvery(actionTypes.LOAD_PERSON_REQUEST, loadPerson);
  yield takeEvery(actionTypes.CREATE_PERSON_REQUEST, createPerson);
}

export default root;
