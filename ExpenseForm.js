import React from 'react'

export default function ExpenseForm() {
    const titleChange=(event)=>{
     console.log("title changed");
    };
  return (
    <form>
        <div>
      <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title</label>&nbsp;&nbsp;
      <input type='text'onChange={titleChange}/>
     </div><br/>
     <div>
        <label>Amount</label>&nbsp;&nbsp;
        <input type='number' min="0.01" step="0.01"/>
     </div><br/>
       <label>Date</label>
       <input type='date' min="2019-01-01" max="2022-12-31"/><br/><br></br>
       <button type="submit">Add Expense</button><hr/>
    </form>
  )
}
