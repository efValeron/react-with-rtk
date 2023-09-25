import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice.ts";
import {loadState, saveState} from "./localStorage.ts";
import throttle from 'lodash/throttle';

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  preloadedState
})

export type RootState = ReturnType<typeof store.getState>

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

// @ts-ignore
window.store = store