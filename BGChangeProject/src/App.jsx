import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("gray")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{background:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-20 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>

        <button className='rounded-2xl px-4 py-3 text-white shadow-lg' style={{background:"red"}} onClick={()=>setcolor("red")}>
          Red
        </button>
        <button className='rounded-2xl px-4 py-3 text-white shadow-lg' style={{background:"blue"}} onClick={()=>setcolor("blue")}>
          Blue
        </button>
        <button className='rounded-2xl px-4 py-3 text-white shadow-lg' style={{background:"black"}} onClick={()=>setcolor("black")}>
          Black
        </button>
        <button className='rounded-2xl px-4 py-3 text-white shadow-lg' style={{background:"cyan"}} onClick={()=>{setcolor("cyan")}}>
          Cyan
        </button>
      </div>

     </div>
    </div>
     

    </>
  )
}

export default App
