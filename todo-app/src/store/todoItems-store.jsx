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
