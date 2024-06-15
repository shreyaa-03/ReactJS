import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import './App.css'

function App() {
  return (
    <center className="container">
      <AppName></AppName>
          <AddTodo></AddTodo>
          <div className="item-container">
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          </div>
      
    </center>
  );
}

export default App;
