import {
  INCREASE_COUNTER,
  INCREASE_COUNTER_ASYNC,
  DECREASE_COUNTER_ASYNC,
  INCREMENT_BY_ONE,
  INCREMENT_BY_TEN,
  NUMBER_BADHAO_ACTION_ASYNC,
  NUMBER_GHATAO_ACTION_ASYNC,
} from './types';

// export const numberIncrement = () => {
//   console.log('NumberIncrementActionCalled');
//   return {
//     type: INCREASE_COUNTER_ASYNC,
//   };
// };
// export const numberDecrement = () => {
//   return {
//     type: DECREASE_COUNTER_ASYNC,
//   };
// };
// export const saveCounter = value => {
//   return {
//     type: INCREASE_COUNTER,
//     value,
//   };
// };

// export const exceedCounter = () => {
//   console.log('exceedCounter');
//   return {
//     type: INCREMENT_BY_ONE,
//     // value,
//   };
// };
// export const exceededCounter = () => {
//   console.log('exceededCounter');
//   return {
//     type: INCREMENT_BY_TEN,
//     // value,
//   };
// };

export const Numberbadhao = () => {
  // console.log('Numberbadhao');
  return {
    type: NUMBER_BADHAO_ACTION_ASYNC,
    // value,
    // payload,
  };
};

export const NumberGhatao = () => {
  // console.log('NumberGhatao');
  return {
    type: NUMBER_GHATAO_ACTION_ASYNC,
    // value,
    // payload,
  };
};


