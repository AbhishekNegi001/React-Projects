import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //hooks 
  // to make any changes in UI we have to use hooks.
  let [counter, setCounter] = useState(0); //takes initial state and returns a value and a funtion
  
  const addValue = ()=>{
    counter+=1;
    console.log('Value Increased', counter);
    setCounter(counter)
  }
  let removeValue = ()=>{
    counter-=1
    console.log('Value Decreased', counter)
    setCounter(counter)
  }

  return (
    <>
      <h1>02. Counter Project</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Increment Counter</button>
      <button onClick={removeValue}>Decrement Counter</button>
    </>
  )
}

export default App
