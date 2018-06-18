import React from 'react';

const TodoForm = props => {
  return (
    <div>
    <input
      onChange={props.handleChange}
      type="text"
      name="todo"
      value={props.value}
      placeholder=""
      />
    <button onClick={props.addTodo}>Add Todo</button>
    <button onClick={props.clearTodos}>Clear Completed</button>
    </div>
  );
};
 
export default TodoForm;