// import {INCREASE_COUNTER, DECREASE_COUNTER} from '../actions/types';
import {INCREMENT_BY_ONE, INCREMENT_BY_TEN} from '../actions/types';
const initialState = {
  // counter: 0,
  UpdateCounter: 10,
};

const counterReducer = (state = initialState, action) => {
  console.log('actionFromReducer', action);
  console.log('actionFromReducer', action.type, 'action.type');

  switch (action.type) {
    // case INCREASE_COUNTER:
    //   return {
    //     ...state,
    //     // counter: state.counter + 1,
    //     counter: state.counter + action.value,
    //   };

    // case DECREASE_COUNTER:
    //   return {
    //     ...state,
    //     // counter: state.counter - 1,
    //     counter: state.counter - action.value,
    // };

    case INCREMENT_BY_ONE:
      return {
        ...state,
        UpdateCounter: state.UpdateCounter + 1,
      };
    case INCREMENT_BY_TEN:
      return {
        ...state,
        UpdateCounter: state.UpdateCounter + 10,
      };

    default:
      return state;
  }
};
//exported
export default counterReducer;
