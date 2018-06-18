import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
        task: "",
        id: 0,
        completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: ''});
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }
  render() {
    return (
      <div>
      <TodoForm
      value={this.state.todo}
      handleChange={this.changeTodo}
      addTodo={this.addTodo}
      clearTodos={this.clearCompleted}
      />
      <TodoList
        handleComplete={this.toggleComplete}
        clearTodos={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
