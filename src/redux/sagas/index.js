import { all, fork } from 'redux-saga/effects';

import {
  watchincreaseNumByTen,
  watchincreaseNumByOne,
  watchdecreaseCounter,
  watchIncreaseCounter,
} from './counterSaga';
import { watchtheAddtionFunction } from './numberBadhaoSaga';
import { watchtheSubtractFunction } from './numberBadhaoSaga';
// Redux saga// root saga
export function* rootSaga() {
  yield all([

    fork(watchtheAddtionFunction),
    fork(watchtheSubtractFunction)

    // fork(watchIncreaseCounter),
    // fork(watchdecreaseCounter),
    // fork(watchincreaseNumByOne),
    // fork(watchincreaseNumByTen),
  ]);
}
