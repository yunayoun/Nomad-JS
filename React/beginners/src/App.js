import { useState } from "react";

function App() {
  const [toDo,setToDo] = useState('');
  const [toDos,setToDos] = useState([]);
  const onChange = (e)=>{setToDo(e.target.value)}
  const onSubmit = (e)=>{
    e.preventDefault();
    if(toDo===''){
      return;
    }
    setToDos((currentArr)=>[toDo, ...currentArr]);
    setToDo('');
  }

  return (
    <div>
      <h1>MY TO DO({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo} 
          onChange={onChange} 
          type='text' 
          placeholder="write..."
        ></input>
        <button >add to do</button>
      </form>
      <hr/>
      <ul>
        {/* {toDos.map((item)=> <li >{item}</li>)} 오류뜸.key 필요 */}
        {toDos.map((item,index)=> <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
