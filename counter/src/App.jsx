import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(15)

  //let Counter = 15
  const addValue = ()=>{
    //to aaya if muki saki k 20 thi ochhu hoi to j add kare baki na kre
    if (Counter < 20) {
      setCounter(Counter+1)
    }
    else{
      // aaya 0 yhi mota mate lakh
      //e to remove vala ma nai ave??ha sorry       doneee samjai gyu kya haaa
      alert("Value can't more then 20")
    }
  }

  const RemoveValue = ()=>{
    if(Counter > 0)
    {
      setCounter(Counter-1)
    }
  else{
    alert("value can't less than 0")
  }  }
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{Counter}</h2>

      <button onClick={addValue}>Add Value {Counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {Counter} </button>
    </>
  )
}

export default App
//m kidhu k counter ni valuse 20 thi vathdre na hovi joi ready!!haa
