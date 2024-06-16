import style from '../css/FoodInput.module.css'

export default function FoodInput({handleOnChange}) {

 
  return (
    <div>
          <input type="text" className={style.foodinput} placeholder="Enter food item here"
         onChange={handleOnChange} />
    </div>
  )
}
