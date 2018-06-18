import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoratin: 'line-through' } : null }
      onClick={() => props.handleComplete(props.todo.id)}
      >
      {props.todo.task}
    </div>
  )
}
 
export default Todo;