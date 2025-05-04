import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlices'
import todoReducer from './slices/todoSlices'


const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer
    }
})

export default store