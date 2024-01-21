import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(15)

  //let Counter = 15
  const addValue = ()=>{
    setCounter(Counter+1)
  }

  const RemoveValue = ()=>{
    setCounter(Counter-1)
  }
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:15</h2>

      <button onClick={addValue}>Add Value {Counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {Counter} </button>
    </>
  )
}

export default App
//react kya che e folder khol
