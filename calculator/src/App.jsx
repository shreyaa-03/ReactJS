import style from './css/App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  let [displayData, setDisplayData] = useState("")
  // let [displayData, setDisplayData] = useState([]) // array method

  const onButtonClicked = (event,button) => {
    console.log(`${button} clicked`)
    console.log(event)
    if (button === 'C') {
  setDisplayData("")
    }
    else if (button === '=') {
      const result = eval(displayData)
      setDisplayData(result)
    }
    else {
    // let newDisplay = [...displayData,button] // array method
    setDisplayData(displayData + button)
    }
 
  }

  // const formatDisplayData = () => displayData.join('') // array method

  return <div className={style['calculator']}>
  <Display display = {displayData}></Display>
    <ButtonsContainer handleOnClicked ={ onButtonClicked }></ButtonsContainer>
    </div>


}

export default App
