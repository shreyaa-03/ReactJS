/* eslint-disable react/prop-types */
import style from "../css/TodoItem.module.css";
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todoName, todoDate,handleOnClicked }) {
  return (
    <div className="container text-center">
      <div className={` ${style["kg-row"]} row `}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${style["kg-button"]} btn btn-danger`}
            onClick={ handleOnClicked}
          >
           <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
