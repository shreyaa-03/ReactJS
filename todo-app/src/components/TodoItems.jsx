/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useContext } from "react";
import style from "../css/TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todoItems-store";

export default function TodoItems() {
  const { todoItems, deleteItem } = useContext(TodoItemContext);

  return (
    <div>
      <div className={style["item-container"]}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            todoName={items.name}
            todoDate={items.due}
            handleOnClicked={() => deleteItem(items)}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}
