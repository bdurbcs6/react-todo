import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through', color: "red", fontSize:'1rem' } : null }
      onClick={() => props.handleComplete(props.todo.id)}
      >
      {props.todo.task}
    </div>
  )
}
 
export default Todo;