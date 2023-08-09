import React, { useState,useEffect,useRef } from 'react'

export default function Count() {
  //const [count,setCount]=useState(1);
  const [myData,setMyData]=useState("");

  const input1=useRef('');
    //console.log('file: useRef.jsx-line-11-useref-count',count);
     const Change=()=>{
       console.log(input1.current);
       console.log(myData);
       input1.current.style.backgroundColor='red';
     }
    
  return (
     <>
     <input type='text' value={myData} ref={input1}
     onChange={(e)=> setMyData(e.target.value)}/>
     {/* <h1>The number of times render: {count.current}</h1> */}
     <button onClick={Change}>Submit</button>
     <h2>{myData}</h2>
     </>
  )
}



 