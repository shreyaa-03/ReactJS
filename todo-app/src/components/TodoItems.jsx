/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import style from '../css/TodoItems.module.css'
import TodoItem from './TodoItem'

export default function TodoItems({todoItems}) {
  return (
    <div>
       <div className={style['item-container']}>
              {todoItems.map(items => (<TodoItem todoName={items.name} todoDate={items.due} ></TodoItem>) )}
             
          </div>
      
    </div>
  )
}

