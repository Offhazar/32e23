import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './auth';
import counterReducer from './counter';

// const counterReducer = (state = init, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'INCRESE') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'TOGGLE') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const rootReducers = combineReducers({
//   counter: counterReducer,
//   login: logiReducer,
// });
const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
    auth: authenticationSlice.reducer,
  },
});
export const authActions = authenticationSlice.actions;
export const counterActions = counterReducer.actions;
export default store;
