import { createStore } from "redux";

const INITIA_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIA_VALUE, action) => {
  let newCounter = store;
  if (action.type === "INCREMENT") {
    newCounter = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newCounter = { counter: store.counter - 1 };
  }
  return newCounter;
};

const counterStore = createStore(counterReducer);

export default counterStore;
