/* eslint-disable react/prop-types */
import style from "../css/Item.module.css";
export default function Item({ foodItem ,bought, buttonClicked}) {
  
  return (
    <div>
      <li className={`${style["kg-item"]} list-group-item ${bought && 'active'} `}>
        {foodItem}
        <button
          type="button"
          className={`${style.btn} btn btn-info`}
          onClick={buttonClicked}
        >
          Buy
        </button>
      </li>
    </div>
  );
}
