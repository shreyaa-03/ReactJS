/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// store/TodoItemsProvider.js
import React, { useState, createContext } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});

const TodoItemsProvider = ({ children }) => {

 // let [todoItems, setTodoItems] = useState([]);

  // const addItem = (newItem, newDate) => {
  //   if (newItem && newDate) {
  //     // SPREAD OPERATOR UPDATE
  //     //Drawback -> Since setTodoItems is asynchronousa and is multiple updates are queued, there's a risk that the state might not be the latest version when the update occurs.
  //     // const newItems = [...todoItems, { name: newItem, due: newDate }];
  //     // setTodoItems(newItems);

  //     //SETTING VALUE BY PASSING FUNCTION -> this is better
  //     setTodoItems((currValue) => [
  //       ...currValue,
  //       { name: newItem, due: newDate },
  //     ]);
  //   } else {
  //     alert("Enter both: Name and date");
  //   }
  // };

  // const deleteItem = (itemToDel) => {
  //   let newItems = todoItems.filter((item) => item !== itemToDel);
  //   setTodoItems(newItems);
  // };

  const [todoItems, setTodoItems] = useState([]);

  const addItem = (newItem, newDate) => {
    if (newItem && newDate) {
      setTodoItems((currValue) => [
        ...currValue,
        { name: newItem, due: newDate },
      ]);
    } else {
      alert("Enter both: Name and date");
    }
  };

  const deleteItem = (itemToDel) => {
    let newItems = todoItems.filter((item) => item !== itemToDel);
    setTodoItems(newItems);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsProvider;
