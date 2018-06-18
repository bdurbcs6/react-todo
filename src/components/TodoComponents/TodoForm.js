import React from 'react';
import '../TodoComponents/TodoForm.css';

const TodoForm = props => {
  return (
    <form className="main-form">
      <input
        onChange={props.handleChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="add Todo"
        />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};
 
export default TodoForm;