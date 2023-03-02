import { useState,useEffect } from "react";


function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState('');
  const onClick = ()=> setValue((prev)=>prev+1);
  const onChange = (e)=>setKeyword(e.target.value);

  useEffect(()=>{
    console.log('only once')
  },[]);
  useEffect(()=>{
    console.log('keyword change')
  },[keyword]);
  useEffect(()=>{
    console.log('counter&&keyword change')
  },[counter,keyword]);

  return (
    <div>
    <input 
    value = {keyword} 
    onChange={onChange} 
    placeholder='write' 
    type='text'
    ></input>
    <h1>{counter}</h1>
    <button onClick = {onClick}>click me</button>
    </div>
  );
}

export default App;
//useEffect가 두번반복된이유는 index.js에서 검사하는태그때문.