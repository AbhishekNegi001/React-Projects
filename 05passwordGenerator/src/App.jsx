import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook - it is used to take reference of elements
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    //( '?' shows optional select)
    passwordRef.current?.select()//to give selected effect to the text , by default will select whole text
    passwordRef.current?.setSelectionRange(0, password.length) // it is used to give the range of text to be selected
    window.navigator.clipboard.writeText(password)
  },[password])

  //useCallback is a React hook that lets use memorise or cache a function definiton between re-renders
  //it takes function and dependencies in array as arguments
  // useCallback hook se used so to optimize the function for the dependencies
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let num = '0123456789'
    let char = '~!@#$%^&*()'

    if (numberAllowed) str+=num
    if (charAllowed) str+=char

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);
  
  // useEffect hook is used so that if there is any change in any dependencies re run the function
  // whenever a page is loaded this function is called
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center bg-slate-500'>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}  // passing the reference 
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </div>
  )
}

export default App
