import {all, fork} from 'redux-saga/effects';

import {
  watchincreaseNumByTen,
  watchincreaseNumByOne,
  watchdecreaseCounter,
  watchIncreaseCounter,
} from './counterSaga';

// Redux saga// root saga
export function* rootSaga() {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchdecreaseCounter),
    fork(watchincreaseNumByOne),
    fork(watchincreaseNumByTen),
  ]);
}
