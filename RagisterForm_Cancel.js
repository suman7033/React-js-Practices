import {useState} from 'react'

export default function RagisterForm_Cancel() {
      const Change=(e)=>{
        const target=e.target.name;
         const value=e.target.value;
         //console.log(target,value);

         updateText({...allText,[target]: value})
      }
    const Submit=(e)=>{
       e.preventDefault();

       const newRec={...allText, id:new Date().getTime().toString()}
       console.log(record);
       setRecord([...record,newRec])
       console.log(record);
       updateText({name:"",age:"",phone:""});
    }
    
    const [record, setRecord] = useState([]);
    const[allText,updateText]=useState({
        name:'',
        age:'',
        phone:''
    });
  return (
    <>
    {/* cancel */}
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
{/* cancel */}


    Name:<input type='text' name='name' value={allText.name} onChange={Change}/><br/><br/>
    Age:<input type='text' name='age'value={allText.age} onChange={Change}/><br/><br/>
    Phone:<input type='text' name='phone'value={allText.phone} onChange={Change}/><br/><br/>
    <button type='submit'onClick={Submit}>submit</button>

    <button type="button" data-bs-dismiss="alert" aria-label="Close">Cancel</button>
    </div>

    <div>
        {record.map((curr)=>{
          return (
            <div>
                <h3>{curr.name}</h3>
                <h6>{curr.age}</h6>
                <h7>{curr.phone}</h7>
               </div>
          )
        })}
    </div>
    <br/>
    {/* <button type="button" data-bs-dismiss="alert" aria-label="Close">Cancel</button> */}
{/* </div> */}
    </>
  )
}
