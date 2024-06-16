import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";


function App() {
  let todoItems = [
    {
      name: 'Buy Milk',
      due :'16/06/2024'
    },
    {
      name: 'Buy Choclate',
      due :'16/06/2024'
    },
    {
      name: 'Buy Cream',
      due :'16/06/2024'
    },
  ]
  return (
    <center className="container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
