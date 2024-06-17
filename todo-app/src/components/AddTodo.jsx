/* eslint-disable react/prop-types */
import style from "../css/AddTodo.module.css";
import { useState } from "react";

export default function AddTodo({ handleOnClick }) {
  
  let [newItem, setNewItem] = useState("")
  let [newDate, setNewDate] = useState("")
  
  // const onItemChanged = (event) => {
  //   console.log(event.target.value)
  //   setNewItem(event.target.value)
  // }
  // const onDateChanged = (event) => {
  //   console.log(event.target.value)
  //   setNewDate(event.target.value)
  // }
  // Use one func instead of two diff fucntions 
  const handleChange = (event) => {
    const { target: { name, value } } = event
    if (name === 'newItem') {
      setNewItem(value)
    }else if (name === 'newDate') {
      setNewDate(value)
    }
  }
  const handleAddButton = () => {
    handleOnClick(newItem, newDate)
    setNewItem("")
    setNewDate("")
  }
  return (
    <div className="container text-center">
      <div className={` ${style["kg-row"]} row `}>
        <div className="col-6">
          <input type="text" name="newItem" placeholder="Enter todo here" value={newItem} onChange={ handleChange}/>
        </div>
        <div className="col-4">
          <input type="date" name="newDate" id="" value={newDate} onChange={  handleChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${style["kg-button"]} btn btn-success`}
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
