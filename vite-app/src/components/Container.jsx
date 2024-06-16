/* eslint-disable react/prop-types */
import style from '../css/Container.module.css'

export default function Container(props) {
  return (
      <div className={style.container}>{ props.children}</div>
  )
}
