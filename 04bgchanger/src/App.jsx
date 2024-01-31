import { useState } from "react"
function App() {
  const [color, setColor] = useState('grey')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-slate-800">
          <div className="fixed flex flex-wrap justify-center bottom-12 gap-3 px-2 shadow-lg bg-white px-2 py-3 rounded-3xl">
            <button onClick={()=>setColor('white')} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor:"white", border:'2px solid black'}}>White</button>
            <button onClick={()=>setColor('red')} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor:"red", border:'2px solid black'}}>Red</button>
            <button onClick={()=>setColor('blue')} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor:"blue", border:'2px solid black'}}>Blue</button>
            <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 rounded-full shadow-2xl" style={{backgroundColor:"green", border:'2px solid black'}}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
