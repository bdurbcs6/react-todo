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
      <button className="add-todo" onClick={props.handleAddTodo}>Add Todo</button>
      <button className="clear-todo" onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};
 
export default TodoForm;