import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {

  let [todoItems, setTodoItems] = useState([]) 

  const onClicked = (newItem, newDate) => {
    if (newItem && newDate) {
      const newItems = [...todoItems, {name: newItem,due: newDate }]
      setTodoItems(newItems)
      console.log(event.target.value)
    } else {
      alert("Enter both: Name and date")
    }
   
  }
  return (
    <center className="container">
      <AppName></AppName>
      <AddTodo handleOnClick={onClicked}></AddTodo>
      <TodoItems todoItems={todoItems} setTodoItems={setTodoItems}></TodoItems>
    </center>
  );
}

export default App;
