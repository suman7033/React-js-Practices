 import React, { useState } from 'react'
 import './Admin.css';
 
 export default function Admin_Page() {
  const [textval,setTextval]=useState();
  const [text1val,setText1val]=useState();
  const [displaydata,setDisplayData]=useState([]);
  
  const text1=(e)=>{
     setTextval(e.target.value);
  }
  const text2=(e)=>{
    setText1val(e.target.value);
  }
  const btn=(e)=>{
      setDisplayData((old)=>{
        return [...old,textval,text1val];
        
      })
      
  }

   return (
     <div className='container'>
       <h2 className='one'>Login_Page</h2>
       &nbsp; Name &nbsp; &nbsp;<input className='two' type='text' onChange={text1}></input><br/><br/>
       Password: <input className='three'type='password' onChange={text2}></input><hr/>
       <button className='four'onClick={btn}>login</button><hr/>
       {/* <h5>{textval}</h5>
       <h5>{text1val}</h5> */}
        {displaydata.map((val)=>{
           return <h2 className='five'>{val}</h2>
           
        })}
     </div>
   )
 }
 