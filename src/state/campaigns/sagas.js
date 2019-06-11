import { call, put, takeEvery } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import Api from '../../api';
import * as actionTypes from '../action-types';
import * as campaignActions from './actions';

function* loadAllCampaigns() {
  try {
    // const { data: campaigns } = yield call(Api.fetchAllCampaigns);
    // yield put(campaignActions.loadAllSuccess(campaigns));
    yield put(campaignActions.loadAllSuccess([
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
    ]));
  } catch (e) {
    yield put(campaignActions.loadAllFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_ALL_CAMPAIGNS_REQUEST, loadAllCampaigns);
}

export default root;
