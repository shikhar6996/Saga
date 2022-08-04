import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
import {
  DECREASE_COUNTER,
  DECREASE_COUNTER_ASYNC,
  INCREASE_COUNTER,
  INCREASE_COUNTER_ASYNC,
  INCREMENT_BY_ONE,
  INCREMENT_BY_TEN,
} from '../actions/types';

import {saveCounter} from '../actions';
import {exceedCounter, exceededCounter} from '../actions';
//WORKERS
function* exceedCounterByOne() {
  console.log('exceedCounterByOneWorkerCalled');
  try {
    yield put({INCREMENT_BY_ONE});
  } catch {}
}
function* exceedCounterByTen() {
  console.log('exceedCounterByTenWorkerCalled');
  try {
    yield put({INCREMENT_BY_TEN});
  } catch {}
}

// Worker :increase counter async (delayed by 4 seconds)
// function* increaseCounterAsync() {
//   console.log("NumberIncrementWorkerCalled'");

//   try {
//     // delay 4 seconds
//     // yield delay(4000);
//     //dispatch action to redux store
//     yield put(saveCounter(1));
//   } catch {
//     err => {
//       console.log(err);
//     };
//   }
// }

// WORKER: Decrease Counter
// function* decreaseCounter() {
//   try {
//     //dispatch action from redux
//     yield put({
//       // type: 'DECREASE_COUNTER_ASYNC',
//       type: DECREASE_COUNTER,
//       value: 1,
//     });
//   } catch {
//     err => {
//       console.log(err);
//     };
//   }
// }

//WATCHER :increase Counter Async
// export function* watchIncreaseCounter() {
//   console.log("NumberIncrementWatcherCalled'");
//   yield takeLatest(INCREASE_COUNTER_ASYNC, increaseCounterAsync);
//   //   yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
// }

// WATCHER:Decrease Counter
// export function* watchdecreaseCounter() {
//   //   yield takeLatest('DECREASE_COUNTER_ASYNC', decreaseCounter);
//   yield takeLatest(DECREASE_COUNTER_ASYNC, decreaseCounter);
// }

export function* watchincreaseNumByOne() {
  //   yield takeLatest('DECREASE_COUNTER_ASYNC', decreaseCounter);
  yield takeLatest(INCREMENT_BY_ONE, exceedCounterByOne);
}
export function* watchincreaseNumByTen() {
  //   yield takeLatest('DECREASE_COUNTER_ASYNC', decreaseCounter);
  yield takeLatest(INCREMENT_BY_TEN, exceedCounterByTen);
}
