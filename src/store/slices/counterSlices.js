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
    incrementAmount: (state, { payload }) => {
      state.counter = payload;
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

export const { increment, incrementAmount, decrement, reset } = actions;

export default reducer;
