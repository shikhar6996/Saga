// Imports: Dependencies
import { combineReducers } from 'redux';
// // Imports: Reducers
// import counterReducer from './counterReducer';
import CounterKaReducer from './root1-reducer1';
// Redux: Root Reducer
const rootReducer = combineReducers({
    counters: CounterKaReducer,
});
// Exports
export default rootReducer;
