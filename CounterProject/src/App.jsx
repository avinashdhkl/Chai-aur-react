
import { useState } from 'react';
import './App.css'

function App() {
  const[count,setCount]=useState(15);
 
const AddCount=()=>{
  if(count<20)
        setCount(count+1);
}
const SubCount=()=>{
 if(count>0)
     setCount(count-1);
}
  return (
    <>
      <h1> Chai aur react</h1>
      <h2>Counter Value:{count}</h2>
      <button onClick={AddCount}> Increase Count</button>
      <button onClick={SubCount}> Decrease Count</button>
    </>
  )
}

export default App
