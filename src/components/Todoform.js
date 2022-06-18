import React, {useState} from 'react'

function todoforms() {
const[input, setInput]= useState('')    
  return (
   <form className= 'todo-form'>
    <input 
    type= 'text' 
    placeholder='add a todo' 
    value={input} 
    name='text' 
    classname= 'todo-input'
    /> 
    <button className='todo-button'> add todo</button>
   </form>
  )
}

export default todoforms