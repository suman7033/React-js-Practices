import axios from 'axios'
import React, {useEffect,useState} from 'react'

export default function Filter_Data() {
    const [data,setData]=useState([])
    const [records,setRecords]=useState(data)
    const [noResults,setNoResults]=useState(false);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
            setRecords(res.data)
        })
        .catch(err => console.log(err));
    },[])
    // const filter=(e)=>{
        const filter = (e) => {
            const inputValue = e.target.value.toLowerCase();
            const filteredData = data.filter((f) =>
              f.name.toLowerCase().includes(inputValue)
            );
          
            if (filteredData.length === 0) {
              setNoResults(true);
            } else {
              setNoResults(false);
              setRecords(filteredData);
            }
          };
          
    //   setRecords(data.filter(f =>f.name.toLowerCase().includes(e.target.value)))
    //}
  return (
    <div className='container mt-5'>
        <input type='text' className='text-warning bg-black shadow border'onChange={filter}placeholder='filter'/><br></br>
        <button onClick={filter}>Filter</button><br></br>
    <div className='bg-warning shadow border'><br></br>
    {noResults ? <h2>No Found</h2> : null}
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
