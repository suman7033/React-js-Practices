import {useState} from 'react'

export default function ExpenseForm() {
    const titleChange=(event)=>{
       setTitle(event.target.value);
    };
    const amountchange=(event)=>{
        setenteramount(event.target.value);
    }
    const datechange=(event)=>{
         setenterDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
         title: title,
         amount:enteramount,
         date:new Date(enterDate)
        };
        console.log(expenseData);
        newRec((preExpense)=>[...preExpense,expenseData])
        setTitle('');
        setenteramount('');
        setenterDate('');
    };

     const [title,setTitle]=useState("")
     const[enteramount,setenteramount]=useState("")
     const [enterDate,setenterDate]=useState("");
     const[record,newRec]=useState([]);
  return (
    <form>
        <div>
      <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title</label>&nbsp;&nbsp;
      <input type='text'onChange={titleChange} />
     </div><br/>
     <div>
        <label>Amount</label>&nbsp;&nbsp;
        <input type='number' min="0.01" step="0.01" onChange={amountchange}/>
     </div><br/>
       <label>Date</label>
       <input type='date' min="2019-01-01" max="2022-12-31" onChange={datechange}/><br/><br></br>
       <button type="submit" onClick={submitHandler}>Add Expense</button><hr/>
      <div>
        {record.map((record, index) => (
          <div key={index}>
            <p>Title: {record.title}</p>
            <p>Amount: {record.amount}</p>
            <p>Date: {record.date.toDateString()}</p>
            <hr />
          </div>
        ))}
      </div>
    </form>
  )
}
