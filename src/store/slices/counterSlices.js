import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increment, decrement, reset } = actions;

export default reducer;
