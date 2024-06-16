
import style from './css/App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return <div className={style['calculator']}>
  <Display></Display>
  <ButtonsContainer></ButtonsContainer>
    </div>


}

export default App
