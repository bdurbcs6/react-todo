import React from 'react';
import Todo from './Todo';
import '../TodoComponents/TodoList.css';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo
          handleComplete={props.handleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};
 
export default TodoList;