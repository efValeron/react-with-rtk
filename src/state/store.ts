import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store