import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodo } from "../../api/api";

const initialState = {
  todos: [],
  status: "unknown",
  error: null,
};

export const getTodoThunk = createAsyncThunk(
  "todo/getTodos",
  async (payload, thunkApi) => {
    try {
      const { data } = await getTodo();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue({ message: error.message });
    }
  }
);

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(getTodoThunk.pending, (state) => {
        console.log(111)
      state.status = "pending";
      state.error = null;
    });
    bulder.addCase(getTodoThunk.fulfilled, (state, action) => {
        console.log(222,action)
      state.todos = payload;
      state.status = "success";
    });
    bulder.addCase(getTodoThunk.rejected, (state, action) => {
        console.log(333,action)
      state.status = "faild";
      state.error = action.payload;
    });
  },
});

const { reducer, actions } = todoSlice;

export default reducer;
