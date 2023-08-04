import {useState} from 'react'
import './ListAdd.css';

export default function ListAdd() {
     const change=(e)=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }
         setText(e.target.value);
         
     };
     const Add=(e)=>{
        if(text.trim().length ===0){
            setIsValid(false);
            return;
        }
          setPvalue((old)=>{
            return [...old,text];
          })
          setText("");
     }
    const [text,setText]=useState("");
    const [pvalue,setPvalue]=useState([]);
    const [isValid, setIsValid]=useState(true);
  return (
    <div className='container mt-5 goal-list  text-warning bg-#ccc shadow border'>
      <h1 style={{color: !isValid ? 'red': 'black'}}>Fill this</h1><br/>
      <input type='text' value={text} onChange={change}></input><br/><br/>

      <button className='border-black text-primary bg-#cccc shadow border' onClick={Add}>Add</button>
      {pvalue.map((val)=>{
         return <h1>{val}</h1>
      })}
    </div>
  )
}

