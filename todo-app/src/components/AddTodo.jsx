/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "../css/AddTodo.module.css";
import { useRef, useState, useContext } from "react";
import { TodoItemContext } from "../store/todoItems-store";
import { RiAddCircleFill } from "react-icons/ri";

export default function AddTodo() {
  //USE STATE - CODE
  // let [newItem, setNewItem] = useState("")
  // let [newDate, setNewDate] = useState("")

  // // const onItemChanged = (event) => {
  // //   console.log(event.target.value)
  // //   setNewItem(event.target.value)
  // // }
  // // const onDateChanged = (event) => {
  // //   console.log(event.target.value)
  // //   setNewDate(event.target.value)
  // // }
  // // Use one func instead of two diff fucntions
  // const handleChange = (event) => {
  //   const { target: { name, value } } = event
  //   if (name === 'newItem') {
  //     setNewItem(value)
  //   }else if (name === 'newDate') {
  //     setNewDate(value)
  //   }
  // }
  // const handleAddButton = (event) => {
  //   event.preventDefault()
  //   handleOnClick(newItem, newDate)
  //   setNewItem("")
  //   setNewDate("")
  // }

  // USEREF - CODE
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const {addItem} = useContext(TodoItemContext);

  const handleAddButton = (event) => {
    event.preventDefault();
    addItem(todoNameElement.current.value, dueDateElement.current.value);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className={` ${style["kg-row"]} row `} onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            name="newItem"
            placeholder="Enter todo here"
            ref={todoNameElement}
            // value={newItem}  // onChange={handleChange} -> needed while using useState()
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="newDate"
            id=""
            ref={dueDateElement}
            // value={newDate} onChange={handleChange} -> needed while using useState()
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            className={`${style["kg-button"]} btn btn-success`}
            // onClick={handleAddButton}
          >
            <RiAddCircleFill />
          </button>
        </div>
      </form>
    </div>
  );
}
