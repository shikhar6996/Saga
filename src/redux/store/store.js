// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
// import rootReducer from '../reducers/index';
// import counterReducer from '../reducers/root-Reducer';
import CounterKaReducer from './../reducers/root1-reducer1'
// Imports: Redux Root Saga
import { rootSaga } from '../sagas/index';
import rootReducer from '../reducers';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export { store };
