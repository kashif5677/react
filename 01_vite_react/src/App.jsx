import React from 'react'

function App() {
  let a=10
  const changeA=()=>{
    
    a=20
    
  }
  return (
    <div>
      <h1>Value of a is {a}</h1> 
      <button ty='true' onClick={changeA}>Chans k.ge A</button>
    </div>
  )
}

export default App