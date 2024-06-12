import {useState} from 'react';


function Head(){
  const [count,setCount]= useState(0);
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div>
    <center>
      <h1>Counter: {count}</h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    </center>
    </div>
    
  
  )
  }  
export default Head;     
