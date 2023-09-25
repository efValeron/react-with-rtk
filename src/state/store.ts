import {combineReducers} from "redux";
import {moneyReducer} from "../moneyReducer.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    money: moneyReducer
  })
})

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store