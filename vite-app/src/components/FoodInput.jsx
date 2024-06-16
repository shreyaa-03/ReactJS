/* eslint-disable react/prop-types */
import style from '../css/FoodInput.module.css'

export default function FoodInput({handleKeyDown}) {

 
  return (
    <div>
          <input type="text" className={style.foodinput} placeholder="Enter food item here"
         onKeyDown={handleKeyDown} />
    </div>
  )
}
