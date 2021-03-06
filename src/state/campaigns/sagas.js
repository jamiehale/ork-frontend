import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Api from '../../api';
import * as actionTypes from '../action-types';
import * as campaignActions from './actions';

function* loadAllCampaigns() {
  try {
    const { data: campaigns } = yield call(Api.fetchAllCampaigns);
    yield put(campaignActions.loadAllSuccess(campaigns));
  } catch (e) {
    yield put(campaignActions.loadAllFailure(e));
  }
}

function* loadCampaign(action) {
  try {
    const { id } = action.payload;
    const { data: campaign } = yield call(Api.fetchCampaign, id);
    yield put(campaignActions.loadSuccess(campaign));
  } catch (e) {
    yield put(campaignActions.loadFailure(e));
  }
}

function* createCampaign(action) {
  try {
    const { campaign } = action.payload;
    const { data: newCampaign } = yield call(Api.createCampaign, campaign);
    yield put(push(`/campaigns/${newCampaign.id}`));
  } catch (e) {
    yield put(campaignActions.createCampaignFailure(e));
  }
}

function* root() {
  yield takeEvery(actionTypes.LOAD_ALL_CAMPAIGNS_REQUEST, loadAllCampaigns);
  yield takeEvery(actionTypes.LOAD_CAMPAIGN_REQUEST, loadCampaign);
  yield takeEvery(actionTypes.CREATE_CAMPAIGN_REQUEST, createCampaign);
}

export default root;
