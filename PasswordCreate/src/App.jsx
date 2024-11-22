import { useState, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useEffect(() => {
    let pass = ""
    let str = "ABCDEFIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz"

    if (isNumber)
      str += "0123456789"
    if (isChar)
      str += "!@#$%^&*()_+-*{}[]~'`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log('char',char)
      pass += str.charAt(char)
      // console.log('pass',str.charAt(char))

    }
    setPassword(pass)

  }, [length, isNumber, isChar, setPassword])

  let PasswordCopied = useEffect(() => {

    window.navigator.clipboard.writeText(password);


  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto px-4 rounded-lg my-8 shadow-md text-orange-500  bg-gray-700">


        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full py-1 px-3 mt-2  mb-2 rounded-lg outline-none"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button className="bg-blue-700  text-white w-20 px-2 mx-1 my-2 rounded-lg h-10 " onClick={() => PasswordCopied}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center-sm gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              defaultValue={length}
              min={5}
              max={50}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center-sm gap-x-1">
            <input
              type="checkbox"
              defaultValue={isNumber}
              id="Numner"
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center-sm gap-x-1">
            <input
              type="checkbox"
              defaultValue={isChar}
              id="Numner"
              onChange={() => setIsChar((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
