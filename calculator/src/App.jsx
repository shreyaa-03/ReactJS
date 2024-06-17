import style from './css/App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  let [displayData, setDisplayData] = useState([])

  const onButtonClicked = (event,button) => {
    console.log(`${button} clicked`)
    console.log(event)
    if (button === 'C') {
  setDisplayData([])
    } else {
         // let newDisplay = event.target.value
    let newDisplay = [...displayData,button]
    setDisplayData(newDisplay)
    }
 
  }

  const formatDisplayData = () => displayData.join('')

  return <div className={style['calculator']}>
  <Display display = {formatDisplayData()}></Display>
    <ButtonsContainer handleOnClicked ={ onButtonClicked }></ButtonsContainer>
    </div>


}

export default App
