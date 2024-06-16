/* eslint-disable react/prop-types */
import style from '../css/Item.module.css'
export default function Item( {foodItem}) {
    
  return (
    <div>
      <li className={`${style['kg-item']} list-group-item `}>{foodItem}</li>
    </div>
  )
}
