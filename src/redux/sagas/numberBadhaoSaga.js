import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { Numberbadhao, } from '../actions';
import { NumberGhatao } from '../actions';
import { NUMBER_BADHAO_ACTION_ASYNC, NUMBER_GHATAO_ACTION_ASYNC } from '../actions/types';


//Worker Function


function* AddworkerFucntion() {
    console.log("AddWorkerFucntion  Worker Fucntion Running +++");

    try {


        put({ NUMBER_BADHAO_ACTION_ASYNC })

    }
    catch {
        err => {
            console.log(err, "error by Add worker function");
        }
    }
}

function* SubtractionworkerFucntion() {
    console.log("SubtractWorker  WorkerFucntion Running ----");
    try {


        put({ NUMBER_GHATAO_ACTION_ASYNC })

    }
    catch {
        err => {
            console.log(err, "error by subtract worker function");
        }
    }
}


//Watcher Function 



export function* watchtheAddtionFunction() {
    yield takeLatest(NUMBER_BADHAO_ACTION_ASYNC, AddworkerFucntion)
}


export function* watchtheSubtractFunction() {
    yield takeLatest(NUMBER_GHATAO_ACTION_ASYNC, SubtractionworkerFucntion)
}


