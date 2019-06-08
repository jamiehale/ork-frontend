/*
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actionTypes from '../action-types';

function* loadDashboards() {
  try {
    const { data: dashboards } = yield call(Api.fetchDashboards);
    yield put(dashboardsLoadSuccess(dashboards));
  } catch (e) {
    yield put(dashboardsLoadFailure(e));
  }
}
*/

function* root() {
  // yield takeEvery(actionTypes.DASHBOARDS_LOAD_REQUEST, loadDashboards);
}

export default root;
