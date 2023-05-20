import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  let myStyle={
    minheight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={myStyle}> 
    <h3 className="text-center">Todos List</h3>
    {props.todos.length===0? "No todos to display":
  props.todos.map((todo)=>{
    return(
    
    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    )
  })}
     
    </div>
  )
}
