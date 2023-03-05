import React from "react";
import { useState } from "react";


export default function Counter(){

  const [count,setCount]=useState(0);

  
  const updateCount = (arg)=>{setCount(count+arg)
}



return(
    <>
    <button onClick={()=>updateCount(+1)}>zzzzz</button>
    <span>{count}</span>
    <button onClick={()=>updateCount(-1)}>xxxxx</button>
    </>
  )
}
