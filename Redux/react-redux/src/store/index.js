// import { createStore } from "redux";

// const INITIA_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIA_VALUE, action) => {
//   let newCounter = store;
//   if (action.type === "INCREMENT") {
//     newCounter = { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     newCounter = { ...store, counter: Math.max(0, store.counter - 1) };
//   } else if (action.type === "ADD") {
//     newCounter = {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "SUB") {
//     newCounter = {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "PRIVACY") {
//     newCounter = { ...store, privacy: !store.privacy };
//   }
//   return newCounter;
// };

// const counterStore = createStore(counterReducer);

import { configureStore, createSlice } from "@reduxjs/toolkit";
import Privacy from "../components/Privacy";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacyToggle: (state) => {
      return (state = !state);
    },
  },
});

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer },
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;
