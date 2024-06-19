/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import style from "../css/TodoItems.module.css";
import TodoItem from "./TodoItem";

export default function TodoItems({ todoItems, setTodoItems }) {

  const deleteItem = (itemToDel) => {
    let newItems = todoItems.filter(item => item !== itemToDel)
    setTodoItems(newItems)
  }

  return (
    <div>
      <div className={style["item-container"]}>
        {todoItems.map((items) => (
          <TodoItem key={items.name} todoName={items.name} todoDate={items.due} handleOnClicked={ ()=>deleteItem(items)} ></TodoItem>
        ))}
      </div>
    </div>
  );
}
