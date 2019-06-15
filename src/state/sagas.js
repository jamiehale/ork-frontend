import { fork } from 'redux-saga/effects';
import sessionSaga from './session/sagas';
import campaignsSaga from './campaigns/sagas';
import peopleSaga from './people/sagas';
import nodesSaga from './nodes/sagas';
import categoriesSaga from './categories/sagas';

function* rootSaga() {
  yield fork(sessionSaga);
  yield fork(campaignsSaga);
  yield fork(peopleSaga);
  yield fork(nodesSaga);
  yield fork(categoriesSaga);
}

export default rootSaga;
