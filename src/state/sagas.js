import { fork } from 'redux-saga/effects';
import sessionSaga from './session/sagas';
import nodesSaga from './nodes/sagas';

function* rootSaga() {
  yield fork(sessionSaga);
  yield fork(nodesSaga);
}

export default rootSaga;
