import { fork } from 'redux-saga/effects';
import sessionSaga from './session/sagas';
import campaignsSaga from './campaigns/sagas';
import peopleSaga from './people/sagas';
import placesSaga from './places/sagas';
import thingsSaga from './things/sagas';
import elementsSaga from './elements/sagas';
import categoriesSaga from './categories/sagas';

function* rootSaga() {
  yield fork(sessionSaga);
  yield fork(campaignsSaga);
  yield fork(peopleSaga);
  yield fork(placesSaga);
  yield fork(thingsSaga);
  yield fork(elementsSaga);
  yield fork(categoriesSaga);
}

export default rootSaga;
