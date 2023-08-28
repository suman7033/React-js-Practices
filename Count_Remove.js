import React, { useEffect, useState } from 'react'

 const Count1=()=> {
    const [count,setCount]=useState(0);

    const Increment=()=>{
      setCount(count+1);
    }

    useEffect(()=>{
        console.log("sucessful mounted the count")
        return ()=>{
        };
    },[])

  return (
    <div>
        {console.log("render")}
        <h4>{count}</h4>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Count1;