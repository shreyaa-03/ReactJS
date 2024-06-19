/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoItemContext } from "../store/todoItems-store";

export default function Message() {
  const { todoItems } = useContext(TodoItemContext);

  return todoItems.length === 0 && <h2>Enjoy your day</h2>;
}
