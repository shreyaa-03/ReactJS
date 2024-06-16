
import style from './css/App.module.css'
function App() {
  return <div className={style['calculator']}>
    <input className={style['display']} type="text" />
    <div className={style["buttons-container"]}>
      <button >C</button>
    </div>

 </div>
}

export default App
