/* eslint-disable react/jsx-key */
import style from '../css/ButtonsContainer.module.css'

export default function ButtonsContainer() {

    const buttonsNames = ['C', '1', '2', '+', '3', '4','-','5' , '6', '*', '7', '8', '/', '=', '9', '0', '.']

  return (
      <div className={style["buttons-container"]}>
          {buttonsNames.map(buttons => (<button >{buttons}</button>))}
          
        </div>
   
  )
}
