import { useState } from 'react'
import './App.css'
import Card from './assets/cmponents/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Code aur Tea</h1>
      <Card userName="Abinash" />


    </>
  )
}

export default App
