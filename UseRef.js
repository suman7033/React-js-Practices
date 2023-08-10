import React from 'react'
import { useRef } from 'react'

export default function Count() {

   let userValue=useRef();
     const Add=(e)=>{
        console.log(userValue.current.value);
     }


  return (
    <div>
      <input type='text' ref={userValue}/>
      <button onClick={Add}>Submit</button>
      <h2>.</h2>
    </div>
  )
}


 




 