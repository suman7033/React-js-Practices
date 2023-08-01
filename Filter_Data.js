import axios from 'axios'
import React, { useEffect,useState } from 'react'

export default function Filter_Data() {
    const [data,setData]=useState([])
    const [records,setRecords]=useState(data)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
            setRecords(res.data)
        })
        .catch(err => console.log(err));
    },[])
    const filter=(e)=>{
      setRecords(data.filter(f =>f.name.toLowerCase().includes(e.target.value)))
    }
  return (
    <div className='p-5 bg-light'>
    <div className='bg-white shadow border'>
        <input type='text' onChange={filter} placeholder='filter'/>
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {records.map((d,i)=>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </div>
  )
}
