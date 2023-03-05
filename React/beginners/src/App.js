
import React, { useState } from "react";

function App() {

const [num,setNum] = useState(0)
const [name,setName] = useState('')
const [isChecked,setIsChecked] = useState(false)

return(
  <div>
    <input 
    type="number"
    value={num}
    onChange={(e)=>setNum(e.target.value)}
    />
    <input
    type='text'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <input
    type='checkbox'
    value={isChecked}
    onChange={(e)=>{setIsChecked(e.target.checked)}}
    />
    {isChecked? <span>체크됨</span> : <span>체크안됨</span>}
  </div>
)
}

export default App;
