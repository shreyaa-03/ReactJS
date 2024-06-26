import { createStore } from "redux";

const INITIA_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIA_VALUE, action) => {
  let newCounter = store;
  if (action.type === "INCREMENT") {
    newCounter = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newCounter = { ...store, counter: Math.max(0, store.counter - 1) };
  } else if (action.type === "ADD") {
    newCounter = {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUB") {
    newCounter = {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY") {
    newCounter = { ...store, privacy: !store.privacy };
  }
  return newCounter;
};

const counterStore = createStore(counterReducer);

export default counterStore;
