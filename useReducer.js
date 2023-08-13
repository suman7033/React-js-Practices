import React, { useState,useReducer } from 'react'

const input={
  input:0
}

const Reducer=(state,action)=> {
  switch(action.type){
      case '+':
      return {input:state.input+1};
      case '-':
        return {input:state.input-1};
   }
  }
function Counter(){
  const[state,Dispatch]=useReducer(Reducer,input);
  return (
    <div className='container mt-5'>
      <h1>{state.input}</h1>
      <button onClick={()=>Dispatch({type: '+'})}>+</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>Dispatch({type: '-'})}>-</button>
    </div>
  )
}
export default Counter;
