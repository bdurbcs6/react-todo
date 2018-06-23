import React from 'react';
import '../TodoComponents/TodoForm.css';

const TodoForm = props => {
  return (
    <form className="main-form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.value}
        placeholder="I want to go..."
        />
      <button className="add-todo-button" onClick={props.handleAddTodo}>Add Destination</button>
      <button className="clear-todo-button" onClick={props.handleClearTodos}>Been There</button>
    </form>
  );
};
 
export default TodoForm;