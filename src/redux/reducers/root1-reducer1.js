import { NUMBER_BADHAO_ACTION_ASYNC } from "../actions/types";
import { NUMBER_GHATAO_ACTION_ASYNC } from "../actions/types";

const initialState = {
    NumberkaCounter: 1000,
}

const CounterKaReducer = (state = initialState, action) => {

    console.log(state, "state");
    console.log(action, "action");
    console.log(action.type, "action.type");


    switch (action.type) {
        case NUMBER_BADHAO_ACTION_ASYNC:
            return {
                ...state,
                NumberkaCounter: state.NumberkaCounter + 500
            }

        case NUMBER_GHATAO_ACTION_ASYNC:
            return {
                ...state,
                NumberkaCounter: state.NumberkaCounter - 500
            }

        default:
            return state;
    }




}

export default CounterKaReducer 