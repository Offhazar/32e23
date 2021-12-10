import { createSlice } from '@reduxjs/toolkit';

const initCounter = {
  counter: 0,
  showCounter: true,
};

const counterReducer = createSlice({
  name: 'counter',
  initialState: initCounter,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increce(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterReducer;
