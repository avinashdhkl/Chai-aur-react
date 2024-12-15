import { useState } from 'react'
import './App.css'
import Header from './Componments/Header/Header'
import Footer from './Componments/Footer/Footer'
import Home from './Componments/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
