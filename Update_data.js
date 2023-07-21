import {useState} from 'react'

export default function AddTask() {
    function Plus(){
       update(data+1)
    }

  const[data,update]=useState(1)
  return (
    <div className='container my-4'>
       <h2>{data}</h2>
       <button onClick={Plus}>Plus</button>
    </div>
  )
}

