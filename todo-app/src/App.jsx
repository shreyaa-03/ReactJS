import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
// import { useState } from "react";
import Message from "./components/Message";
import TodoItemsProvider from "./store/todoItems-store";

function App() {
  return (
    <TodoItemsProvider>
      <center className="container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <Message></Message>
        <TodoItems></TodoItems>
      </center>
      {/* </TodoItemContext.Provider>
       */}
    </TodoItemsProvider>
  );
}

export default App;
